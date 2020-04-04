type Country = {
  name: string
  enName: string
  alpha2: string
  alpha3: string
  numeric: string
  iso3166_2: string
}

type DataInput = {
  id: string
  name: string
  title: string
  titleTH?: string
  subtitle?: string
  required?: Boolean
  additionalUrl?: string
  options?: { value: any; label: string }[]
  dataType: String | Boolean
  inputType:
    | 'Date'
    | 'M/F'
    | 'Select <Nationality>'
    | 'Text Single Line'
    | 'Text <Phone Number>'
    | 'Text <Email>'
    | 'Text <National ID>'
    | 'มี/ไม่มี'
    | 'ไปมา/ไม่ไป'
    | 'ใช่/ไม่ใช่'
    | 'Select <Country>'
    | 'Select'
    | 'MuliSelect'
  showCondition?: any
  defaultValue?: any
}
