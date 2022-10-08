import bcrypt from "bcryptjs"

const data = {
    users: [
      {
          firstname: 'prevail',
          lastname: 'ayodele',
          address: 'lagos',
          email: 'test@gmail.com',
          email: bcrypt.hashSync('prevail@'),
          phone: +2348134760438,
          isAdmin: true,
      },
      {
          firstname: 'saheed',
          lastname: 'tolani',
          address: 'ondo',
          email: 'tolani@gmail.com',
          email: bcrypt.hashSync('tolani@'),
          phone: +2348134760438,
          isAdmin: false,
      },
    ],
 product: [

]
}
export default data