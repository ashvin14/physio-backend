
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('scores').del()
    .then(function () {
      // Inserts seed entries
      return knex('scores').insert([
        {user_id: 2, session_id: '1121', score: 10, day:1, date: '2019-01-02 07:28:45+05:30', joint: 'Elbow'},
        {user_id: 2, session_id: '1121', score: 12, day:1, date: '2019-01-02 07:30:39+05:30', joint: 'Elbow'},
        {user_id: 2, session_id: '1121', score: 11, day:1, date: '2019-01-02 07:33:42+05:30', joint: 'Elbow'},
        {user_id: 2, session_id: '1121', score: 09, day:1, date: '2019-01-02 07:35:27+05:30', joint: 'Elbow'},
        {user_id: 2, session_id: '1121', score: 11, day:1, date: '2019-01-02 07:38:06+05:30', joint: 'Elbow'},

        {user_id: 2, session_id: '7341', score: 12, day:2, date: '2019-01-03 08:02:06+05:30', joint: 'Elbow'},
        {user_id: 2, session_id: '7341', score: 12, day:2, date: '2019-01-03 08:05:19+05:30', joint: 'Elbow'},
        {user_id: 2, session_id: '7341', score: 14, day:2, date: '2019-01-03 08:08:35+05:30', joint: 'Elbow'},
        {user_id: 2, session_id: '7341', score: 13, day:2, date: '2019-01-03 08:12:47+05:30', joint: 'Elbow'},
        {user_id: 2, session_id: '7341', score: 17, day:2, date: '2019-01-03 08:14:28+05:30', joint: 'Elbow'},

        {user_id: 2, session_id: '2967', score: 17, day:3, date: '2019-01-04 05:12:06+05:30', joint: 'Elbow'},
        {user_id: 2, session_id: '2967', score: 18, day:3, date: '2019-01-04 05:16:25+05:30', joint: 'Elbow'},
        {user_id: 2, session_id: '2967', score: 19, day:3, date: '2019-01-04 05:19:14+05:30', joint: 'Elbow'},
        {user_id: 2, session_id: '2967', score: 18, day:3, date: '2019-01-04 05:22:36+05:30', joint: 'Elbow'},
        {user_id: 2, session_id: '2967', score: 20, day:3, date: '2019-01-04 05:25:46+05:30', joint: 'Elbow'},

        {user_id: 2, session_id: '9785', score: 22, day:4, date: '2019-01-05 11:36:12+05:30', joint: 'Elbow'},
        {user_id: 2, session_id: '9785', score: 25, day:4, date: '2019-01-05 11:39:34+05:30', joint: 'Elbow'},
        {user_id: 2, session_id: '9785', score: 24, day:4, date: '2019-01-05 11:45:14+05:30', joint: 'Elbow'},
        {user_id: 2, session_id: '9785', score: 25, day:4, date: '2019-01-05 11:48:08+05:30', joint: 'Elbow'},
        {user_id: 2, session_id: '9785', score: 27, day:4, date: '2019-01-05 11:52:07+05:30', joint: 'Elbow'},

        {user_id: 2, session_id: '1823', score: 28, day:5, date: '2019-01-07 15:02:06+05:30', joint: 'Elbow'},
        {user_id: 2, session_id: '1823', score: 30, day:5, date: '2019-01-07 15:07:05+05:30', joint: 'Elbow'},
        {user_id: 2, session_id: '1823', score: 31, day:5, date: '2019-01-07 15:11:19+05:30', joint: 'Elbow'},
        {user_id: 2, session_id: '1823', score: 34, day:5, date: '2019-01-07 15:15:29+05:30', joint: 'Elbow'},
        {user_id: 2, session_id: '1823', score: 33, day:5, date: '2019-01-07 15:19:36+05:30', joint: 'Elbow'},


        {user_id: 6, session_id: '3141', score: 18, day:1, date: '2019-01-13 13:35:12+05:30', joint: 'Wrist'},
        {user_id: 6, session_id: '3141', score: 20, day:1, date: '2019-01-13 13:37:23+05:30', joint: 'Wrist'},
        {user_id: 6, session_id: '3141', score: 21, day:1, date: '2019-01-13 13:40:34+05:30', joint: 'Wrist'},
        {user_id: 6, session_id: '3141', score: 22, day:1, date: '2019-01-13 13:42:45+05:30', joint: 'Wrist'},
        {user_id: 6, session_id: '3141', score: 23, day:1, date: '2019-01-13 13:43:56+05:30', joint: 'Wrist'},

        {user_id: 6, session_id: '3141', score: 16, day:1, date: '2019-01-13 14:15:39+05:30', joint: 'Elbow'},
        {user_id: 6, session_id: '3141', score: 17, day:1, date: '2019-01-13 14:18:12+05:30', joint: 'Elbow'},
        {user_id: 6, session_id: '3141', score: 21, day:1, date: '2019-01-13 14:22:34+05:30', joint: 'Elbow'},
        {user_id: 6, session_id: '3141', score: 22, day:1, date: '2019-01-13 14:25:38+05:30', joint: 'Elbow'},
        {user_id: 6, session_id: '3141', score: 21, day:1, date: '2019-01-13 14:30:05+05:30', joint: 'Elbow'},
      ]);
    });
};
