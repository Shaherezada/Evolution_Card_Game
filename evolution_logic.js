window.onload = function(){ 
    let basePopulation = ''           // Первое число
    let traitModifiers = ''           // Второе число
    let evolutionResult = ''  // Результат вычисления
    let activeEvolutionPhase = null  // Выбранная операция
    
    // Получаем доступ к экрану калькулятора
    const outputElement = document.getElementById("evolution-display")

    // Получаем все кнопки с цифрами (их id начинаются с "genome_val_")
    const digitButtons = document.querySelectorAll('[id ^= "genome_val_"]')

    function appendGenomeSequence(digit) {
        if (!activeEvolutionPhase) {
            if ((digit != '.') || (digit == '.' && !basePopulation.includes(digit))) {
                basePopulation += digit;
            }
            outputElement.innerHTML = basePopulation;
        }
        else {
            if ((digit != '.') || (digit == '.' && !traitModifiers.includes(digit))) {
                traitModifiers += digit;
                outputElement.innerHTML = traitModifiers;
            }
        }
    }
    
    // Настраиваем обработчики для кнопок ввода
    digitButtons.forEach(button => {
        button.onclick = function() {
            const digitValue = button.innerHTML;
            appendGenomeSequence(digitValue);
        }
    });

    // Настраиваем обработчики для стандартных операций
    document.getElementById("op_reproduction_mult").onclick = function() { 
        if (basePopulation === '') return;
        activeEvolutionPhase = 'x';
    }
    document.getElementById("op_symbiosis_plus").onclick = function() { 
        if (basePopulation === '') return;
        activeEvolutionPhase = '+';
    }
    document.getElementById("op_predation_minus").onclick = function() { 
        if (basePopulation === '') return;
        activeEvolutionPhase = '-';
    }
    document.getElementById("op_territory_div").onclick = function() { 
        if (basePopulation === '') return;
        activeEvolutionPhase = '/';
    }

    // Backspace
    document.getElementById("action_regression").onclick = function() {
        if (!activeEvolutionPhase) {
            basePopulation = basePopulation.slice(0, -1);
            outputElement.innerHTML = basePopulation === '' ? 0 : basePopulation;
        } else {
            traitModifiers = traitModifiers.slice(0, -1);
            outputElement.innerHTML = traitModifiers === '' ? 0 : traitModifiers;
        }
    }

    // Обработчик для операции по теме варианта (Подсчёт очков)
    document.getElementById("action_calculate_evolution_score").onclick = function() {
        if (basePopulation === '') return;
        activeEvolutionPhase = 'score';
    }

    // Очистка
    document.getElementById("action_extinction").onclick = function() { 
        basePopulation = ''
        traitModifiers = ''
        activeEvolutionPhase = ''
        evolutionResult = ''
        outputElement.innerHTML = 0
    }
    
    // Вычисляем результат при нажатии на = (вешаем обработчик события click на кнопку =)
    document.getElementById("action_calculate_result").onclick = function() { 
        // Проверяем, что у нас есть оба числа и операция
        if (basePopulation === '' || traitModifiers === '' || !activeEvolutionPhase)
            return
            
        switch(activeEvolutionPhase) {
            case 'x':
                evolutionResult = (+basePopulation) * (+traitModifiers)
                break;
            case '+':
                evolutionResult = (+basePopulation) + (+traitModifiers);
                break;
            case '-':
                evolutionResult = (+basePopulation) - (+traitModifiers);
                break;
            case '/':
                evolutionResult = (+basePopulation) / (+traitModifiers);
                break;
            case 'score':
                evolutionResult = (+basePopulation) * 2 + (+traitModifiers)
                break;
            default:
                break;
        }
        
        basePopulation = evolutionResult.toString()
        traitModifiers = ''
        activeEvolutionPhase = null

        // Показываем результат на экране
        outputElement.innerHTML = basePopulation;
    }
};
