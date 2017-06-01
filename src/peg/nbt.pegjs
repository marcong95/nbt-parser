/* 
 * Parser for datatags in Minecraft
 */

/* ---- Datatag grammer ---- */

datatag
  = ws tag:tag ws { return tag }
listBegin = ws '[' ws
listEnd = ws ']' ws
compoundBegin = ws '{' ws
compoundEnd = ws '}' ws
kvSep = ws ':' ws
pairSep = ws ',' ws

/* ---- Tags ---- */

tag
  = boolean
  / integral
  / real
  // / string
  / compound
  // / array
  / list

boolean
  = 'true' { return true }
  / 'false' { return false }

// array
  // intArray only shows in /Level/HeightMap, which cannot retrieve with cmds
  // = intArray
  // byteArray not supported in commands before 1.12
  // / byteArray

/* ---- TAG_Compound ---- */

compound
  = compoundBegin
    // compoundMember
    compoundEnd

/* ---- TAG_List ---- */

list
  = listBegin
    // listMember
    listEnd

/* ---- TAG_Byte, TAG_Short, TAG_Int, TAG_Long ---- */

integral = int:signedInt type:[bsL]? {
  return { 
    type: {
      b: 'byte',
      s: 'short',
      L: 'long'
    }[type] || 'int', 
    value: int
  }
}

// integral
//   = byte
//   / short
//   / int
//   / long

// byte = int:signedInt 'b' { return { type: 'byte', value: int } }
// int = int:signedInt { return { type: 'int', value: int } }
// short = int:signedInt 's' { return { type: 'short', value: int } }
// long = int:signedInt 'L' { return { type: 'long', value: int } }

zero = '0'
nonzero = [1-9]
digit = zero / nonzero
unsignedInt = zero / (nonzero digit*)
signedInt = sign:minus? int:unsignedInt { return parseInt(sign || '' + int)}
plus = '+'
minus = '-'

/* ---- TAG_Float, TAG_Double ---- */

real
  = float
  / double

// TODO: unsuffixed decimal undefined
float = decimal:decimal 'f' { return { type: 'float', value: decimal } }
double = decimal:decimal 'd' { return { type: 'double', value: decimal } }

decimalPoint = '.'
frac = decimalPoint digit+
decimal = signedInt frac?

/* ---- TAG_String ---- */

/* ---- Miscellaneous definitions ---- */

ws 'whitespace' = [ \t\n\r]*
