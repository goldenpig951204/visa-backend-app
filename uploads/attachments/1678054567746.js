const { get } = require("lodash");
const credentialModel = require("../models/credential");
const settingModel = require("../models/setting");
const dvAxios = require("devergroup-request").default;
const captcha = require("2captcha");
const axios = new dvAxios({
    axiosOpt: {
        timeout: 30000
    }
});
const parseHTML = require("jquery-html-parser");

const login = async (req, res) => {
    let { email, password } = req.body;
    let response = await axios.instance.get("https://www.sellthetrend.com/login");
    let $ = parseHTML(response.data);
    let token = $("meta[name='csrf-token']").attr("content");
    let cookie = axios.cookieJar.getCookieStringSync("https://www.sellthetrend.com/login");
    let siteKey = "6LcG0NEZAAAAAICLQmu62SsC4bux9r7ENZRgvyY-";
    let solver = new captcha.Solver(process.env.TWO_CAPTCHA_KEY);
    let { data:recaptcha_token } = await solver.recaptcha(siteKey, "https://www.sellthetrend.com/login");
    console.log(recaptcha_token);
    let body = `email=${email}&password=${password}&remember=&recaptcha_token=${recaptcha_token}`;   
    response = await axios.instance.post(
        `https://www.sellthetrend.com/login`,
        body,
        {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                "Content-Length": Buffer.byteLength(body),
                "Host": "www.sellthetrend.com",
                "Origin": "https://www.sellthetrend.com",
                "Referer": "https://www.sellthetrend.com/login",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "Windows",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "Cookie": cookie,
                "X-csrf-Token": token,
                "X-Request-Width": "XMLHttpRequest"
            }
        }
    );
    console.log(response.data);
}

module.exports = {
    login
};