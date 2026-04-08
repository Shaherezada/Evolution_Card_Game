// ДЗ1 — Задание 2.3: длиннейшая серия побед (максимальный повтор «1» в строке)
export function findLongestCardStreak(matchLog) {
    if (!matchLog || matchLog.length === 0) return 0;

    let maxStreak = 0;
    let i = 0;

    do {
        if (matchLog[i] === '1') {
            let streak = 0;
            do {
                streak++;
                i++;
            } while (i < matchLog.length && matchLog[i] === '1');
            if (streak > maxStreak) maxStreak = streak;
        } else {
            i++;
        }
    } while (i < matchLog.length);

    return maxStreak;
}

// ДЗ1 — Задание 3.8: проверка палиндрома — два решения

// Решение 1: разворот строки
export function isCardNamePalindrome(name) {
    const s = name.toLowerCase().replace(/\s+/g, '');
    return s === s.split('').reverse().join('');
}

// Решение 2: два указателя (do...while)
export function isCardNamePalindromeV2(name) {
    const s = name.toLowerCase().replace(/\s+/g, '');
    if (s.length <= 1) return true;
    let left = 0;
    let right = s.length - 1;
    do {
        if (s[left] !== s[right]) return false;
        left++;
        right--;
    } while (left < right);
    return true;
}
