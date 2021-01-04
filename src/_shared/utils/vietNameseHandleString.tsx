export const VietKey = (e: string) => {
  // keyboard.current?.setInput(form.getFieldValue('username'));
  // <script type='text/javascript' src='/static/vietkey.js'></script>
  let newSring = e;
  const nt = {
    a: 'á',
    A: 'Á',
    'ă': 'ắ',
    'Ă': 'Ắ',
    'â': 'ấ',
    'Â': 'Ấ',
    e: 'é',
    E: 'É',
    'ê': 'ế',
    'Ê': 'Ế',
    i: 'í',
    I: 'Í',
    o: 'ó',
    O: 'Ó',
    'ô': 'ố',
    'Ô': 'Ố',
    'ơ': 'ớ',
    'Ơ': 'Ớ',
    u: 'ú',
    U: 'Ú',
    'ư': 'ứ',
    'Ư': 'Ứ',
    y: 'ý',
    Y: 'Ý',
    '': ''
  },
    tt = {
      a: 'à',
      A: 'À',
      'ă': 'ằ',
      'Ă': 'Ằ',
      'â': 'ầ',
      'Â': 'Ầ',
      e: 'è',
      E: 'È',
      'ê': 'ề',
      'Ê': 'Ề',
      i: 'ì',
      I: 'Ì',
      o: 'ò',
      O: 'Ò',
      'ô': 'ồ',
      'Ô': 'Ồ',
      'ơ': 'ờ',
      'Ơ': 'Ờ',
      u: 'ù',
      U: 'Ù',
      'ư': 'ừ',
      'Ư': 'Ừ',
      y: 'ỳ',
      Y: 'Ỳ',
      '': ''
    },
    it = {
      a: 'ả',
      A: 'Ả',
      'ă': 'ẳ',
      'Ă': 'Ẳ',
      'â': 'ẩ',
      'Â': 'Ẩ',
      e: 'ẻ',
      E: 'Ẻ',
      'ê': 'ể',
      'Ê': 'Ể',
      i: 'ỉ',
      I: 'Ỉ',
      o: 'ỏ',
      O: 'Ỏ',
      'ô': 'ổ',
      'Ô': 'Ổ',
      'ơ': 'ở',
      'Ơ': 'Ở',
      u: 'ủ',
      U: 'Ủ',
      'ư': 'ử',
      'Ư': 'Ử',
      y: 'ỷ',
      Y: 'Ỷ',
      '': ''
    },
    rt = {
      a: 'ã',
      A: 'Ã',
      'ă': 'ẵ',
      'Ă': 'Ẵ',
      'â': 'ẫ',
      'Â': 'Ẫ',
      e: 'ẽ',
      E: 'Ẽ',
      'ê': 'ễ',
      'Ê': 'Ễ',
      i: 'ĩ',
      I: 'Ĩ',
      o: 'õ',
      O: 'Õ',
      'ô': 'ỗ',
      'Ô': 'Ỗ',
      'ơ': 'ỡ',
      'Ơ': 'Ỡ',
      u: 'ũ',
      U: 'Ũ',
      'ư': 'ữ',
      'Ư': 'Ữ',
      y: 'ỹ',
      Y: 'Ỹ',
      '': ''
    },
    ut = {
      a: 'ạ',
      A: 'Ạ',
      'ă': 'ặ',
      'Ă': 'Ặ',
      'â': 'ậ',
      'Â': 'Ậ',
      e: 'ẹ',
      E: 'Ẹ',
      'ê': 'ệ',
      'Ê': 'Ệ',
      i: 'ị',
      I: 'Ị',
      o: 'ọ',
      O: 'Ọ',
      'ô': 'ộ',
      'Ô': 'Ộ',
      'ơ': 'ợ',
      'Ơ': 'Ợ',
      u: 'ụ',
      U: 'Ụ',
      'ư': 'ự',
      'Ư': 'Ự',
      y: 'ỵ',
      Y: 'Ỵ',
      '': ''
    },

    muE = {
      e: 'ê',
      E: 'Ê',
      '': ''
    },
    muO = {
      o: 'ô',
      O: 'Ô',
      '': ''
    },
    muA = {
      a: 'â',
      A: 'Â',
      '': ''
    },
    et = {
      o: 'ơ',
      O: 'Ơ',
      u: 'ư',
      U: 'Ư',
      a: 'ă',
      A: 'Ă',
      '': ''
    },
    ot = {
      d: 'đ',
      D: 'Đ',
      '': ''
    };

  const c = {
    s: 'SAC',
    S: 'SAC',
    f: 'HUYEN',
    F: 'HUYEN',
    r: 'HOI',
    R: 'HOI',
    x: 'NGA',
    X: 'NGA',
    j: 'NANG',
    J: 'NANG',
    a: 'MU_A',
    A: 'MU_A',
    e: 'MU_E',
    E: 'MU_E',
    o: 'MU_O',
    O: 'MU_O',
    w: 'MOC',
    W: 'MOC',
    d: 'NGANG',
    D: 'NGANG'
  };
  const lastCharacter = e.substring(e.length - 1, e.length);
  // if (e.length <= 1) {
  //   return e;
  // }

  if (c[lastCharacter] && e.length > 1) {
    const nearEndLastCharacter = e.substring(e.length - 2, e.length - 1);
    if (c[lastCharacter] == 'SAC' && nt[nearEndLastCharacter]) {
      newSring = e.substring(0, e.length - 2) + nt[nearEndLastCharacter];
    }

    if (c[lastCharacter] == 'HUYEN' && tt[nearEndLastCharacter]) {
      newSring = e.substring(0, e.length - 2) + tt[nearEndLastCharacter];
    }

    if (c[lastCharacter] == 'HOI' && it[nearEndLastCharacter]) {
      newSring = e.substring(0, e.length - 2) + it[nearEndLastCharacter];
    }

    if (c[lastCharacter] == 'NGA' && rt[nearEndLastCharacter]) {
      newSring = e.substring(0, e.length - 2) + rt[nearEndLastCharacter];
    }

    if (c[lastCharacter] == 'NANG' && ut[nearEndLastCharacter]) {
      newSring = e.substring(0, e.length - 2) + ut[nearEndLastCharacter];
    }

    if (c[lastCharacter] == 'MU_A' && muA[nearEndLastCharacter]) {
      newSring = e.substring(0, e.length - 2) + muA[nearEndLastCharacter];
    }

    if (c[lastCharacter] == 'MU_O' && muO[nearEndLastCharacter]) {
      newSring = e.substring(0, e.length - 2) + muO[nearEndLastCharacter];
    }

    if (c[lastCharacter] == 'MU_E' && muE[nearEndLastCharacter]) {
      newSring = e.substring(0, e.length - 2) + muE[nearEndLastCharacter];
    }

    if (c[lastCharacter] == 'MOC' && et[nearEndLastCharacter]) {
      newSring = e.substring(0, e.length - 2) + et[nearEndLastCharacter];
    }

    if (c[lastCharacter] == 'NGANG' && ot[nearEndLastCharacter]) {
      newSring = e.substring(0, e.length - 2) + ot[nearEndLastCharacter];
    }
  }

  return newSring;
};