import { Toast } from 'mint-ui';
import store from '../../store';
export default {
    checkRequire: function checkMobile(val,label) {
        var reg = /^1[34578]\d{9}$/;
        val = val.replace(/(^\s*)|(\s*$)/g, '');
        var type = store.state.user.type;
        if (!val) {
            Toast({
                message: label,
                duration: 3000
            });
            return;
        }else{
            return true;
        }
    },
    checkMobile: function checkMobile(val) {
        var reg = /^1[34578]\d{9}$/;
        val = val.replace(/(^\s*)|(\s*$)/g, '');
        var type = store.state.user.type;
        if (!val) {
            if (type == 2) {
                Toast({
                    message: 'Please enter the phone number',
                    duration: 3000
                });
            } else if(type == 1){
                Toast({
                    message: '请输入手机号码',
                    duration: 3000
                });
            } else if(type == 3){
                Toast({
                    message: '핸드폰 번호 입력해주세요.',
                    duration: 3000
                });
            } else if(type == 4){
                Toast({
                    message: 'Veuillez entrer un numéro de téléphone',
                    duration: 3000
                });
            } else if(type == 5){
                Toast({
                    message: '請輸入手機號碼',
                    duration: 3000
                });
            } else if(type == 5){
                Toast({
                    message: '携帯番号を入力してください',
                    duration: 3000
                });
            }
            return;
        } else if (!reg.test(val)) {
            if (type == 2) {
                Toast({
                    message: 'The number of mobile phones you entered is incorrect',
                    duration: 3000
                });
            } else if(type == 1){
                Toast({
                    message: "您输入的手机号码不正确",
                    duration: 3000
                });
            } else if(type == 3){
                Toast({
                    message: "입력한 핸드폰 번호는 정확하지 않습니다.",
                    duration: 3000
                });
            } else if(type == 4){
                Toast({
                    message: "Pas votre numéro de téléphone mobile d'entrée correcte",
                    duration: 3000
                });
            } else if(type == 5){
                Toast({
                    message: "您輸入的手機號碼不正確",
                    duration: 3000
                });
            } else if(type == 6){
                Toast({
                    message: "入力した携帯番号が正しくありません",
                    duration: 3000
                });
            }
            return;
        } else {
            return true;
        }
    },
    checkCode: function checkCode(val) {
        var reg = new RegExp(/^\d{6}$/);
        val = val.replace(/(^\s*)|(\s*$)/g, '');
        var type = store.state.user.type;
        if (!val) {
            if (type == 2) {
                Toast({
                    message: 'Please enter the verification code',
                    duration: 3000
                });
            } else if (type == 1) {
                Toast({
                    message: "请输入验证码",
                    duration: 3000
                });
            } else if (type == 3) {
                Toast({
                    message: "검증 코드를 입력하십시오.",
                    duration: 3000
                });
            } else if (type == 4) {
                Toast({
                    message: "Veuillez entrer le Code de vérification",
                    duration: 3000
                });
            } else if (type == 5) {
                Toast({
                    message: "請輸入驗證碼",
                    duration: 3000
                });
            } else if (type == 6) {
                Toast({
                    message: "検証コードを入力してください",
                    duration: 3000
                });
            } 
            return;
        } else if (!reg.test(val)) {
            if (type == 2) {
                Toast({
                    message: 'The format of the validation code you entered is incorrect',
                    duration: 3000
                });
            } else if (type == 1) {
                Toast({
                    message: "您输入的验证码格式不正确",
                    duration: 3000
                });
            } else if (type == 3) {
                Toast({
                    message: "입력한 인증 코드 형식이 정확하지 않습니다.",
                    duration: 3000
                });
            } else if (type == 4) {
                Toast({
                    message: "Pas de code de vérification entrant dans le format correct",
                    duration: 3000
                });
            } else if (type == 5) {
                Toast({
                    message: "您輸入的驗證碼格式不正確",
                    duration: 3000
                });
            } else if (type == 6) {
                Toast({
                    message: "入力された認証コードのフォーマットが正しくありません",
                    duration: 3000
                });
            }
            return;
        } else {
            return true;
        }
    },
    checkPsw: function checkPsw(val) {
        var reg = /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?![,\.#%'\+\*\-:;^_`]+$)[,\.#%'\+\*\-:;^_`0-9A-Za-z]{8,20}$/; ///^(\w){6,20}$/
        val = val.replace(/(^\s*)|(\s*$)/g, '');
        var type = store.state.user.type;
        if (!val) {
            if (type == 2) {
                Toast({
                    message: 'Please input a password',
                    duration: 3000
                });
            } else if (type == 1) {
                Toast({
                    message: "请输入密码",
                    duration: 3000
                });
            } else if (type == 3) {
                Toast({
                    message: "비밀번호 입력",
                    duration: 3000
                });
            } else if (type == 4) {
                Toast({
                    message: "Veuillez saisir le mot de passe",
                    duration: 3000
                });
            } else if (type == 5) {
                Toast({
                    message: "請輸入密碼",
                    duration: 3000
                });
            } else if (type == 6) {
                Toast({
                    message: "パスワードを入力してください",
                    duration: 3000
                });
            }
            return;
        } else if (!reg.test(val)) {
            if (type == 2) {
                Toast({
                    message: 'The password format you entered is incorrect',
                    duration: 3000
                });
            } else if (type == 1) {
                Toast({
                    message: "您输入的密码格式不正确",
                    duration: 3000
                });
            } else if (type == 3) {
                Toast({
                    message: "입력한 암호 형식 형식이 정확하지 않습니다.",
                    duration: 3000
                });
            } else if (type == 4) {
                Toast({
                    message: "Pas de format de mot de passe de votre entrée correcte",
                    duration: 3000
                });
            } else if (type == 5) {
                Toast({
                    message: "您輸入的密碼格式不正確",
                    duration: 3000
                });
            } else if (type == 6) {
                Toast({
                    message: "入力されたパスワードのフォーマットは正しくありません",
                    duration: 3000
                });
            } 
            return;
        } else {
            return true;
        }
    },
    checkNpsw: function checkNpsw(nval, val) {
        val = val.replace(/(^\s*)|(\s*$)/g, '');
        var type = store.state.user.type;
        if (!val) {
            if (type == 2) {
                Toast({
                    message: 'Please enter the confirmation password',
                    duration: 3000
                });
            } else if (type == 1) {
                Toast({
                    message: "请输入确认密码",
                    duration: 3000
                });
            } else if (type == 3) {
                Toast({
                    message: "비밀번호 확인 부탁드립니다.",
                    duration: 3000
                });
            } else if (type == 4) {
                Toast({
                    message: "Veuillez saisir le mot de passe de confirmation",
                    duration: 3000
                });
            } else if (type == 5) {
                Toast({
                    message: "請輸入確認密碼",
                    duration: 3000
                });
            } else if (type == 6) {
                Toast({
                    message: "確認パスワードを入力してください",
                    duration: 3000
                });
            }
            return;
        } else if (nval != val) {
            if (type == 2) {
                Toast({
                    message: 'The two different passwords you entered were different',
                    duration: 3000
                });
            } else if (type == 1) {
                Toast({
                    message: "您两次输入的密码不同",
                    duration: 3000
                });
            } else if (type == 3) {
                Toast({
                    message: "당신께서 두 번이나 입력한 암호가 다르네요.",
                    duration: 3000
                });
            } else if (type == 4) {
                Toast({
                    message: "Le mot de passe de votre entrée deux fois différentes",
                    duration: 3000
                });
            } else if (type == 5) {
                Toast({
                    message: "您兩次輸入的密碼不同",
                    duration: 3000
                });
            } else if (type == 6) {
                Toast({
                    message: "2回の入力のパスワードが違います",
                    duration: 3000
                });
            }
            return;
        } else {
            return true;
        }
    }
};