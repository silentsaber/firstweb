var sqlMap = {
  login: 'SELECT userid,username,avatar FROM user_info WHERE userid = (SELECT userid FROM users WHERE userid = ? and password = ?);',
  getUserInfo: 'SELECT userid,username,avatar,sex,birthday,address,autograph FROM user_info WHERE userid = ?;'
}
module.exports = sqlMap
