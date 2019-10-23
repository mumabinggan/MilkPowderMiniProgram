export const pluginFixGMTDateTime = cookie =>
  (cookie + '').replace(
    /\=(Mon|Tue|Wed|Thu|Fri|Sat|Sun)\s*\,/g,
    '=$1'
  );

export const pluginTrim = s =>
  (s + '').replace(/^\s+|\s+$/g, '');

export const pluginLinear = s =>
  (s + '').replace(/[\r\n]+/g, '');

export const prepareString = (s, ...plugin) => {
  plugin = [
    pluginTrim,
    pluginLinear,
    pluginFixGMTDateTime,
    ...plugin
  ];
  return plugin.length < 1
    ? s
    : plugin.length === 1
      ? plugin[0](s)
      : plugin.reduce((a, b) =>
        typeof (a) === 'function' ? b(a(s)) : b(a)
      );
};

export const cookieItemRegExp =
  /([\w\-_]+)(\s*\=\s*((Mon|Tue|Wed|Thu|Fri|Sat|Sun).+?GMT|[^;\,]+))?/g
  ;

export const cookieParser = (cookie, ...plugin) => {
  let cleanCookie = prepareString(cookie + '', ...plugin);
  let cookieSegments = cleanCookie.split(',').map(s => pluginTrim(s));
  let cookies = [];
  cookieSegments.forEach(cookieStr => {
    if (cookieStr.length < 1) return;
    let ms = cookieStr.match(cookieItemRegExp), cookieObj = {};
    if (ms) {
      ms.forEach(m => {
        let idx = m.indexOf('='), key, val;
        if (idx > -1) {
          key = m.substr(0, idx);
          val = m.substr(idx + 1);
        } else {
          key = m;
          val = null;
        }
        cookieObj[key] = val;
      })
    }
    cookies.push({ cookieStr, cookieObj })
  });
  return cookies;
};
