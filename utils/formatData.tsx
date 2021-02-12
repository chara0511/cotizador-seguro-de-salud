import { StateModel } from '@components/context'

const formatData = (data: any) => {
  const formattedData: StateModel = {
    numDoc: data.info.seed,
    phone: data.results[0].phone,
    date: data.results[0].dob.date,
    title: data.results[0].name.title,
    firstName: data.results[0].name.first,
    lastName: data.results[0].name.last,
    gender: data.results[0].gender,
  }

  return formattedData
}

export default formatData
