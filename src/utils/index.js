import numeral from 'numeral'
import _ from 'lodash'

numeral.register('locale', 'br', {
  delimiters: {
    thousands: '.',
    decimal: ','
  },
  currency: {
    symbol: 'R$'
  }
})

numeral.locale('br')

const funcs = {
  formatAsCurrency(number) {
    const formattedNumber = numeral(number).format('$ 0,0.00')
    return `${formattedNumber}`
  },
  formatAsCurrencyWithoutCents(number) {
    const formattedNumber = numeral(number).format('$ 0,0')
    return `${formattedNumber}`
  },
  concatValues(values) {
    return values.join(' ')
  },
  isEmptyValue(value) {
    return !value ||
      (Array.isArray(value) && value.length === 0) ||
      (value.constructor === Object && Object.keys(value).length === 0)
  },
  formatEmptyValue(value, emptyValue) {
    if (emptyValue === null || emptyValue === undefined) {
      emptyValue = '-'
    }

    return this.isEmptyValue(value) ? emptyValue : value
  },
  formatParcels(parcelas) {
    let _retorno = ''
    if (parcelas > 1) {
      _retorno = `${parcelas}x`
    } else if (parcelas == 1) {
      _retorno = 'parcela única'
    }
    return _retorno
  },
  formatAddress(streetType, street, number, complement, district, city, state) {
    let result = ''
    let auxAddress1 = []
    let auxAddress2 = []

    if (!this.isEmptyValue(street)) {
      if (!this.isEmptyValue(streetType)) {
        result = result.concat(`${streetType} `)
      }

      auxAddress1.push(street)
    }

    if (!this.isEmptyValue(number)) {
      auxAddress1.push(number)
    }

    if (!this.isEmptyValue(complement)) {
      auxAddress1.push(complement)
    }

    result = result.concat(auxAddress1.join(', '))

    if (auxAddress1.length > 0 && !this.isEmptyValue(district)) {
      result = result.concat(` - Bairro ${district}`)
    } else if (!this.isEmptyValue(district)) {
      result = result.concat(`Bairro ${district}`)
    }

    if (!this.isEmptyValue(city)) {
      auxAddress2.push(city)
    }

    if (!this.isEmptyValue(state)) {
      auxAddress2.push(state)
    }

    if (result !== '' && auxAddress2.length > 0) {
      result = result.concat(`\n${auxAddress2.join(' - ')}`)
    } else if (auxAddress2.length > 0) {
      result = result.concat(auxAddress2.join(' - '))
    }

    return result
  },
  formatAddressFirstLine(streetType, street, number, complement) {
    const join = (list, separator) => list.filter((p) => p).join(separator)

    return join([
      join([streetType, street], ' '),
      number,
      complement
    ], ', ')
  },
  formatAddressSecondLine(district, city, state) {
    return [district, city, state].filter((p) => p).join(' - ')
  },
  formatWithLetterSpacing(text, platform, count = 1) {
    // Para o Android ainda não tem uma propriedade de estilo que adicione
    // espaçamentos entre as letras de uma palavra, então este método
    // "resolve" o problema temporariamente e de forma satisfatória
    if (platform === 'android') {
      return text.split('').join('\u200A'.repeat(count))
    } else {
      return text
    }
  }
}

_.mixin({
  'fillSequence': (length) => {
    return _.map(Array(length), (item, index) => { return index })
  }
})

export default funcs
