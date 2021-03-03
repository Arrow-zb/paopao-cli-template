module.exports = function() {
  return async function send(ctx, next) {
    ctx.send = (data=null, message='success', code=0) => {
      ctx.body = {
        code,
        data,
        message
      }
    };
    await next();
  }
};