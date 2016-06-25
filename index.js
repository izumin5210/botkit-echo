module.exports = function(controller) {
  controller.hears(
    [/^echo\s+(.*)/],
    ["direct_message", "direct_mention"],
    function(bot, msg) {
      bot.reply(msg, msg.match[1]);
    }
  );
};
