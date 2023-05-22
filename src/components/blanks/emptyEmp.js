import { v4 as uuid } from 'uuid'


const emptyEmp = {
    name: '',
    title: '',
    city: '',
    start: '',
    end: '',
    pay: '',
    reason: '',
    id: uuid(),
    jobs: [],
}

export default emptyEmp