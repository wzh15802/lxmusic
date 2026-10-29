/*!
 * @name 𝖧౿ᥣᥣ𝗈 Ԝ𝗈𝗋ᥣᑯ
 * @author hello world
 * @version 260925
 * @description 每天都要开心哦,无论如何...
 * 1004342496←有bug就说(应该没有🤓)或者催更
 */

const ENABLE_CACHE = true;
const CACHE_TTL = 20 * 60 * 1000;
const TIMEOUT = 10000;
const RACE_APIS = false;
const CONFIG = {
  kw: {
    name: '酷我音乐',
    apis: [
      {
        api: 'https://musicserver.haitangw.cc/v1/music/resolve-url',
        idField: ['hash', 'songmid', 'rid', 'id'],
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'Mozilla/5.0'
        },
        body: { source: 'kw', rid: '{id}', level: '{quality}' },
        urlField: ['data.url'],
        quality: {
          atmos: 'atmos',
          atmos_plus: 'atmos_plus',
          master: 'master'
        }
      },
{
  api: 'http://nmobi.kuwo.cn/mobi.s?f=web&user=0&source=kwplayerhd_ar_1.1.4.5_tianbao_T1A_qirui.apk&type=convert_url_with_sign&rid={id}&br={quality}',
  idField: ['rid', 'hash', 'songId', 'id', 'songmid'],
  urlField: ['data.url'],
  quality: {
    '128k': '128kmp3',
    '320k': '320kmp3',
    flac: '2000kflac',
    flac24bit: '4000kflac',
    hires: '4000kflac',
    atmos: '20201kmflac',
    atmos_plus: '20501kmflac',
    master: '20900kmflac'
  },
  headers: {
    'User-Agent': 'Mozilla/5.0 (Linux; Android) AppleWebKit/537.36'
        }
      }
    ]
  },
  kg: {
    name: '酷狗音乐',
    apis: [
      {
        api: 'http://103.79.184.97/api/music/url?source=kg&songId={id}&quality={quality}&key=6C1F-53W0-GRKI-EVFG',
        idField: ['hash', 'songmid', 'id', 'rid'],
        headers: {
          'User-Agent': 'Mozilla/5.0',
          'X-Card-Key': '6C1F-53W0-GRKI-EVFG'
        },
        urlField: ['url', 'data.url'],
        quality: {
          '128k': '128k',
          '320k': '320k',
          flac: 'flac'
        }
      },
      {
        api: 'https://yy.zddyr.top/lx/api/?source=kg&quality={quality}&mainHash={id}',
        idField: ['hash', 'songmid', 'id', 'rid'],
        urlField: ['url'],
        quality: {
          '128k': '128k',
          '320k': '320k',
          flac: 'flac',
          hires: 'hires'
        },
        before: (() => {
          let deviceId = '', token = '', tokenTs = 0;
          const SCRIPT = 'YYMusicSource', VER = 'v1.0.0';
          return (params) => {
            if (!deviceId) deviceId = 'lx-online-' + Math.random().toString(36).substring(2, 8) + Date.now().toString(36).slice(-4);
            if (!token || Date.now() - tokenTs > 5 * 60 * 1000) {
              const payload = { device_id: deviceId, ip: '0.0.0.0', timestamp: Math.floor(Date.now() / 1000), random: Math.random().toString(36).substring(2, 12) };
              try {
                if (globalThis.lx?.utils?.buffer?.from) {
                  const buf = globalThis.lx.utils.buffer.from(JSON.stringify(payload), 'utf-8');
                  token = globalThis.lx.utils.buffer.bufToString(buf, 'base64');
                } else { token = btoa(unescape(encodeURIComponent(JSON.stringify(payload)))); }
              } catch (e) { token = ''; }
              tokenTs = Date.now();
            }
            params.headers = params.headers || {};
            params.headers['X-Token'] = token;
            params.headers['X-Client'] = `${SCRIPT}/${VER} (Android)`;
            return params;
          };
        })()
      },
      {
        api: 'https://musicserver.haitangw.cc/v1/music/resolve-url',
        idField: ['hash', 'songmid', 'id', 'rid'],
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'User-Agent': 'Mozilla/5.0' },
        body: { source: 'kg', rid: '{id}', level: '{quality}' },
        urlField: ['data.url'],
        quality: {
          '128k': 'standard',
          '320k': 'exhigh',
          flac: 'lossless',
          hires: 'hires',
          atmos: 'atmos',
          master: 'clear'
        }
      }
    ]
  },
  tx: {
    name: 'QQ音乐',
    apis: [
      {
        api: 'http://103.79.184.97/api/music/url?source=tx&songId={id}&quality={quality}&key=6C1F-53W0-GRKI-EVFG',
        idField: ['songmid', 'id', 'hash'],
        headers: { 'User-Agent': 'Mozilla/5.0', 'X-Card-Key': '6C1F-53W0-GRKI-EVFG' },
        urlField: ['url', 'data.url'],
        quality: { '128k': '128k', '320k': '320k', flac: 'flac', flac24bit: 'flac24bit' }
      },
      {
        api: 'https://yy.zddyr.top/lx/api/?source=tx&songmid={id}&quality={quality}',
        idField: ['songmid', 'id', 'hash'],
        urlField: ['url'],
        quality: { '128k': '128k', '320k': '320k', flac: 'flac', hires: 'hires' },
        before: (() => {
          let deviceId = '', token = '', tokenTs = 0;
          const SCRIPT = 'YYMusicSource', VER = 'v1.0.0';
          return (params) => {
            if (!deviceId) deviceId = 'lx-online-' + Math.random().toString(36).substring(2, 8) + Date.now().toString(36).slice(-4);
            if (!token || Date.now() - tokenTs > 5 * 60 * 1000) {
              const payload = { device_id: deviceId, ip: '0.0.0.0', timestamp: Math.floor(Date.now() / 1000), random: Math.random().toString(36).substring(2, 12) };
              try {
                if (globalThis.lx?.utils?.buffer?.from) {
                  const buf = globalThis.lx.utils.buffer.from(JSON.stringify(payload), 'utf-8');
                  token = globalThis.lx.utils.buffer.bufToString(buf, 'base64');
                } else { token = btoa(unescape(encodeURIComponent(JSON.stringify(payload)))); }
              } catch (e) { token = ''; }
              tokenTs = Date.now();
            }
            params.headers = params.headers || {};
            params.headers['X-Token'] = token;
            params.headers['X-Client'] = `${SCRIPT}/${VER} (Android)`;
            return params;
          };
        })()
      },
{
  api: 'https://tang.api.s01s.cn/music_open_api.php?mid={id}',
  idField: ['songmid', 'id', 'hash'],
  urlField: ['song_play_url_pq', 'song_play_url_sq', 'song_play_url_hq', 'song_play_url_standard', 'song_play_url', 'song_play_url_fq'],
  quality: {
    '128k': 'song_play_url_standard',
    '320k': 'song_play_url_hq',
    flac: 'song_play_url_sq',
    flac24bit: 'song_play_url_pq',
    atmos: 'song_play_url_pq'
  },
  after: (data) => {
    if (!data) throw new Error('tang 无响应');
    const fields = ['song_play_url_pq', 'song_play_url_sq', 'song_play_url_hq', 'song_play_url_standard', 'song_play_url', 'song_play_url_fq'];
    for (const f of fields) {
      if (typeof data[f] === 'string' && data[f].trim()) return data[f].trim();
    }
    throw new Error('tang 无链接');
  }
},
      {
        api: 'https://musicserver.haitangw.cc/v1/music/resolve-url',
        idField: ['songmid', 'id', 'hash'],
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'User-Agent': 'Mozilla/5.0' },
        body: { source: 'tx', rid: '{id}', level: '{quality}' },
        urlField: ['data.url'],
        quality: {
          '128k': 'standard',
          '320k': 'exhigh',
          flac: 'lossless',
          flac24bit: 'hires',
          hires: 'hires',
          atmos: '1999',
          atmos_plus: '2999',
          master: 'jymaster'
          }
        },
      {
        api: 'https://a.aa.cab/qq.music?msg={keyword}&n=1&type={quality}',
        idField: ['songmid', 'id', 'hash'],
        urlField: ['data.music', 'playUrl', 'url', 'data.url'],
        quality: { '128k': '0', '320k': '1', flac: '4', master: '5' }
      }
    ]
  },
wy: {
  name: '网易云音乐',
  apis: [
    {
      api: 'https://c.wwwweb.top/music/url',
      idField: ['hash', 'songmid'],
      urlField: ['url'],
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'lx-music-desktop/2.10.1'
      },
      body: { source: 'wy', musicId: '{id}', quality: '{quality}' },
      quality: {
        '128k': '128k',
        '320k': '320k',
        flac: 'flac',
        flac24bit: 'flac24bit',
        hires: 'hires',
        atmos: 'atmos',
        master: 'master'
      },
      after: (data) => {
        if (data.code === 200 && data.url) return data.url;
        throw new Error(data.message || '无数据');
        }
      },
    {
  api: 'https://musicserver.haitangw.cc/v1/music/resolve-url',
  idField: ['songmid', 'id', 'hash'],
  method: 'POST',
  headers: { 'Content-Type': 'application/json', 'User-Agent': 'Mozilla/5.0' },
  body: { source: 'wy', rid: '{id}', level: '{quality}' },
  urlField: ['data.url'],
  quality: {
    '128k': 'standard',
    '320k': 'exhigh',
    flac: 'lossless',
    flac24bit: 'hires',
    hires: 'hires',
    atmos: 'jyeffect',
    master: 'jymaster'
        }
      },
    {
      api: 'https://yy.zddyr.top/lx/api/?source=wy&songmid={id}&quality={quality}',
      idField: ['hash', 'songmid', 'id'],
      urlField: ['url', 'data.url'],
      quality: {
        '128k': '128k',
        '320k': '320k',
        flac: 'flac',
        hires: 'hires'
      },
      before: (() => {
        let deviceId = '', token = '', tokenTs = 0;
        const SCRIPT = 'YYMusicSource', VER = 'v1.0.0';
        return (params) => {
          if (!deviceId) deviceId = 'lx-online-' + Math.random().toString(36).substring(2, 8) + Date.now().toString(36).slice(-4);
          if (!token || Date.now() - tokenTs > 5 * 60 * 1000) {
            const payload = { device_id: deviceId, ip: '0.0.0.0', timestamp: Math.floor(Date.now() / 1000), random: Math.random().toString(36).substring(2, 12) };
            try {
              if (globalThis.lx?.utils?.buffer?.from) {
                const buf = globalThis.lx.utils.buffer.from(JSON.stringify(payload), 'utf-8');
                token = globalThis.lx.utils.buffer.bufToString(buf, 'base64');
              } else { token = btoa(unescape(encodeURIComponent(JSON.stringify(payload)))); }
            } catch (e) { token = ''; }
            tokenTs = Date.now();
          }
          params.headers = params.headers || {};
          params.headers['X-Token'] = token;
          params.headers['X-Client'] = `${SCRIPT}/${VER} (Android)`;
          return params;
        };
      })()
    },
    {
      api: 'https://mcp.nianxinxz.com/share/ceshi/wy.php?id={id}&level={quality}',
      idField: ['hash', 'songmid', 'id'],
      urlField: ['url'],
      quality: {
        '128k': 'standard',
        '320k': 'exhigh',
        flac: 'lossless',
        flac24bit: 'hires',
        hires: 'hires',
        master: 'jymaster',
        atmos: 'jyeffect'
      },
      after: (data) => {
        if (data.code === 200 && data.url) return data.url;
        throw new Error(data.message || 'mcp 无数据');
      }
    },
   {
  api: 'http://103.79.184.97/api/music/url?platform=wy&songId={id}&quality={quality}&key=6C1F-53W0-GRKI-EVFG',
  idField: ['songmid', 'songId', 'id', 'hash'],
  urlField: ['url', 'data.url', 'data'],
  quality: {
    '128k': '128k',
    '320k': '320k',
    flac: 'flac',
    flac24bit: 'flac24bit',
    hires: 'hires'
  },
  headers: {
    'User-Agent': 'lx-music-mobile/2.0.0',
    'X-Card-Key': '6C1F-53W0-GRKI-EVFG'
  }
}
  ]
},
  mg: {
    name: '咪咕音乐',
    apis: [
      {
        api: 'https://yy.zddyr.top/lx/api/?source=migu&songmid={id}&quality={quality}',
        idField: ['songmid', 'id', 'hash'],
        urlField: ['url', 'data.url'],
        quality: { '128k': '128k', '320k': '320k', flac: 'flac', hires: 'hires' },
        before: (() => {
          let deviceId = '', token = '', tokenTs = 0;
          const SCRIPT = 'YYMusicSource', VER = 'v1.0.0';
          return (params) => {
            if (!deviceId) deviceId = 'lx-online-' + Math.random().toString(36).substring(2, 8) + Date.now().toString(36).slice(-4);
            if (!token || Date.now() - tokenTs > 5 * 60 * 1000) {
              const payload = { device_id: deviceId, ip: '0.0.0.0', timestamp: Math.floor(Date.now() / 1000), random: Math.random().toString(36).substring(2, 12) };
              try {
                if (globalThis.lx?.utils?.buffer?.from) {
                  const buf = globalThis.lx.utils.buffer.from(JSON.stringify(payload), 'utf-8');
                  token = globalThis.lx.utils.buffer.bufToString(buf, 'base64');
                } else { token = btoa(unescape(encodeURIComponent(JSON.stringify(payload)))); }
              } catch (e) { token = ''; }
              tokenTs = Date.now();
            }
            params.headers = params.headers || {};
            params.headers['X-Token'] = token;
            params.headers['X-Client'] = `${SCRIPT}/${VER} (Android)`;
            return params;
          };
        })()
      },
      {
        api: 'https://oiapi.net/api/MiGu_Music?msg={keyword}&br={quality}&n=1',
        idField: ['songmid', 'id', 'hash'],
        urlField: ['data.url', 'url'],
        quality: { '128k': 'LQ', '320k': 'HQ', flac: 'SQ', hires: 'SQ' }
      }
    ]
  }
}
const { EVENT_NAMES, request, on, send } = globalThis.lx;
const cache = Object.create(null);
const sourceKeys = Object.keys(CONFIG);

const getCache = k => ENABLE_CACHE && cache[k]?.expire > Date.now() ? cache[k].data : (delete cache[k], null);
const setCache = (k, d) => ENABLE_CACHE && (cache[k] = { data: d, expire: Date.now() + CACHE_TTL });

const httpRequest = (url, options = {}) => new Promise((resolve, reject) => {
  const timer = setTimeout(() => reject(new Error('请求超时')), options.timeout || TIMEOUT);
  request(url, {
    method: options.method || 'GET',
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', ...options.headers },
    ...(options.body !== undefined ? { body: options.body } : {})
  }, (err, resp) => {
    clearTimeout(timer);
    if (err) return reject(err instanceof Error ? err : new Error(String(err)));
    if (!resp) return reject(new Error('空响应'));
    resolve({ body: resp.body, statusCode: resp.statusCode || resp.status || 200, url: resp.url });
  });
});

const getField = (obj, path) => path.split('.').reduce((val, p) => val == null ? undefined
  : Array.isArray(val) ? (/^\d+$/.test(p) ? val[+p] : val.map(v => v?.[p]).find(v => v != null && v !== ''))
  : val[p], obj);

const asUrl = v => typeof v === 'string' && /^(https?:)?\/\//.test(v.trim())
  ? (v.trim().startsWith('//') ? 'https:' + v.trim() : v.trim())
  : null;

const findUrl = (data, fields) => data == null ? null : asUrl(data) || fields.map(f => asUrl(getField(data, f))).find(Boolean) || null;

const getSongId = (info, fields) => fields.map(f => getField(info, f)).find(v => v !== undefined && v !== null && v !== '')?.toString() ?? '';

const qualitys = Object.create(null);
const sources = Object.create(null);
const idFieldsBySource = Object.create(null);
sourceKeys.forEach(s => {
  const apiList = CONFIG[s].apis || [];
  const qs = [...new Set(apiList.flatMap(a => Object.keys(a.quality || {})))];
  qualitys[s] = qs.reduce((acc, q) => (acc[q] = q, acc), {});
  sources[s] = { name: CONFIG[s].name, type: 'music', actions: ['musicUrl'], qualitys: qs };
  idFieldsBySource[s] = [...new Set(apiList.flatMap(a => a.idField || []))];
});
qualitys.local = {};
sources.local = { name: '本地音乐', type: 'music', actions: ['musicUrl', 'lyric', 'pic'], qualitys: [] };

const FALLBACK = {
  master: ['master', 'atmos_plus', 'atmos', 'hires', 'flac24bit', 'flac', '320k', '128k'],
  atmos_plus: ['atmos_plus', 'atmos', 'hires', 'flac24bit', 'flac', '320k', '128k'],
  atmos: ['atmos', 'hires', 'flac24bit', 'flac', '320k', '128k'],
  hires: ['hires', 'flac24bit', 'flac', '320k', '128k'],
  flac24bit: ['flac24bit', 'flac', '320k', '128k'],
  flac: ['flac', '320k', '128k'],
  '320k': ['320k', '128k'],
  '128k': ['128k'],
};

const substitute = (val, map) => typeof val === 'string'
  ? val.replace(/\{(id|quality|keyword)\}/g, (_, k) => map[k] ?? '')
  : Array.isArray(val) ? val.map(v => substitute(v, map))
  : val && typeof val === 'object' ? Object.fromEntries(Object.entries(val).map(([k, v]) => [k, substitute(v, map)]))
  : val;

const hasPlaceholder = (api, name) => [api.api, api.body, api.headers].some(v => v && JSON.stringify(v).includes(`{${name}}`));

const resolveRedirectUrl = (resp, baseUrl) => resp.url
  ? asUrl(resp.url) || (() => { try { return new URL(resp.url, baseUrl).href; } catch { return null; } })()
  : null;

const buildParams = (api, info, quality, keyword) => {
  const needsId = hasPlaceholder(api, 'id');
  const needsKeyword = hasPlaceholder(api, 'keyword');
  const id = needsId ? getSongId(info, api.idField) : '';
  if (needsId && !id) throw new Error('缺少id字段');
  if (needsKeyword && !keyword) throw new Error('缺少歌曲名');

  const map = { id, keyword, quality: api.quality ? api.quality[quality] : quality };
  let params = {
    url: substitute(api.api, map),
    headers: api.headers ? substitute(api.headers, map) : undefined,
    body: api.body ? substitute(api.body, map) : undefined
  };
  if (typeof api.before === 'function') params = api.before(params) || params;
  if (!params.url || /\{[^}]*\}/.test(params.url)) throw new Error('URL模板未配置');
  return params;
};

const runRaw = async (api, params) => {
  if (api.followRedirect === false) return params.url;
  const tryMethod = async method => {
    const r = await httpRequest(params.url, { method, headers: params.headers, timeout: api.timeout });
    if (r.statusCode >= 400) { const err = new Error(`状态码${r.statusCode}`); err.statusCode = r.statusCode; throw err; }
    return r;
  };
  const firstMethod = api.method || 'HEAD';
  let resp;
  try { resp = await tryMethod(firstMethod); }
  catch (e) { if (firstMethod === 'GET' || e.statusCode !== 405) throw e; resp = await tryMethod('GET'); }
  if ([301, 302, 303, 307, 308].includes(resp.statusCode)) {
    const abs = resolveRedirectUrl(resp, params.url);
    if (abs) return abs;
  }
  return params.url;
};

const runStandard = async (api, params) => {
  const resp = await httpRequest(params.url, {
    method: api.method || 'GET',
    headers: params.headers,
    body: params.body,
    timeout: api.timeout
  });
  if (api.followRedirect !== false && [301, 302, 303, 307, 308].includes(resp.statusCode)) {
    const abs = resolveRedirectUrl(resp, params.url);
    if (abs) return abs;
  }
  const direct = asUrl(resp.body);
  if (direct) return direct;
  const data = typeof resp.body === 'string' ? JSON.parse(resp.body) : resp.body;
  const parsed = typeof api.after === 'function' ? api.after(data) : data;
  if (typeof parsed === 'string') { const u = asUrl(parsed); if (u) return u; }
  const result = findUrl(parsed, api.urlField || ['url', 'data.url', 'playUrl']);
  if (result) return result;
  throw new Error('响应中未找到有效链接');
};

const tryApi = async (s, info, quality) => {
  const apiList = CONFIG[s].apis;
  if (!apiList?.length) throw new Error('无API配置');
  const keyword = encodeURIComponent(info.name || info.songname || '');

  const run = async api => {
    const tag = api.api.split('?')[0].split('/').pop() || 'api';
    if (api.quality && !api.quality[quality]) throw new Error(`${tag}:不支持${quality}`);
    try {
      const params = buildParams(api, info, quality, keyword);
      return await (api.raw ? runRaw(api, params) : runStandard(api, params));
    } catch (e) {
      throw new Error(`${tag}:${e.message}`);
    }
  };

  if (RACE_APIS) {
    try { return await Promise.any(apiList.map(run)); }
    catch (agg) { throw new Error(`所有API均失败(${quality}) [${(agg.errors || [agg]).map(e => e.message || String(e)).join(' | ')}]`); }
  }

  const fails = [];
  for (const api of apiList) {
    try { return await run(api); } catch (e) { fails.push(e.message || String(e)); }
  }
  throw new Error(`所有API均失败(${quality}) [${fails.join(' | ')}]`);
};

const inflight = Object.create(null);

const apis = sourceKeys.reduce((acc, s) => {
  acc[s] = {
    async musicUrl(info, quality) {
      if (!info) throw new Error('缺少musicInfo');
      const identity = getSongId(info, idFieldsBySource[s]) || [info.name, info.singer || info.artist].filter(Boolean).join('-');
      const key = `${s}_${identity || `anon${Math.random().toString(36).slice(2)}`}_${quality}`;
      const cached = getCache(key);
      if (cached) return cached;
      if (inflight[key]) return inflight[key];

      const run = (async () => {
        const fails = [];
        for (const q of FALLBACK[quality] || [quality]) {
          if (!qualitys[s].hasOwnProperty(q)) continue;
          try {
            const result = await tryApi(s, info, q);
            if (result) { setCache(key, result); return result; }
          } catch (e) { fails.push(e.message || String(e)); }
        }
        throw new Error(fails.length ? fails.join(' || ') : '所有音质均失败');
      })();

      inflight[key] = run;
      try { return await run; } finally { delete inflight[key]; }
    }
  };
  return acc;
}, {});

on(EVENT_NAMES.request, ({ source, action, info } = {}) => {
  if (!apis[source] || action !== 'musicUrl') return Promise.reject('不支持');
  if (!qualitys[source]?.[info?.type]) return Promise.reject(`不支持的音质: ${info?.type}`);
  return apis[source].musicUrl(info.musicInfo, info.type).catch(e => Promise.reject(e.message));
});

send(EVENT_NAMES.inited, { openDevTools: false, sources });