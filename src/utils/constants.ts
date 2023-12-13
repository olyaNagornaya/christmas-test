export const REGEXP_EMAIL = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
export const REGEXP_PASSWORD = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export const VALIDATE_MESSAGE = {
    requiredMessage: 'Обязательное поле',
    emailMessage: 'Не валидный email',
    passwordMessage: 'Пароль должен содержать минимум 8 символов, одну заглавную букву и цифру',
}
