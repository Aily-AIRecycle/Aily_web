const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const passwordRegex =
  /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;

const nameRegex = /^[a-zA-Z가-힣]{2,50}$/;

const phoneRegex = /^01(?:0|1|[6-9])\d{4}\d{4}$/;

const birthRegex =
  /^(?:(?:19|20)\d{2})(?:(?:(?:0[1-9]|1[0-2])(?:0[1-9]|1\d|2[0-8]))|(?:02(?:29))|(?:(?:0[13-9]|1[0-2])(?:29|30))|(?:0[13578]|1[02])31)$/;

export const validationRules = {
  email: (value: string) => emailRegex.test(value),
  password: (value: string) => passwordRegex.test(value),
  nickname: (value: string) => nameRegex.test(value),
  phonenumber: (value: string) => phoneRegex.test(value),
  birth: (value: string) => birthRegex.test(value),
  gender: (value: string) => value !== "",
};
