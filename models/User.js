const Model = require('./Model');
const {ValidationError} = Model;
const bcrypt = require('bcrypt');

class Person extends Model {

   static get tableName() {
      return 'user';
   }
   
   static get jsonSchema() {
      return {
         type: 'object',
         required: ['first_name','last_name','username', 'password'],
         properties: {
            id: {type: 'integer'},
            first_name: {type: 'string'},
            middle_name: {type: 'string'},
            username: {type: 'string'},
            password: {type: 'string'}
         }
      };
   }

    static async register(newUser) {
      const saltRounds = 10;
      const plainPassword = newUser.password;
      
      if(!plainPassword || plainPassword === '')
         throw new ValidationError(
         {
            type: 'ModelValidation',
            data: {
               password: [
                  {
                     message: 'is a required property',
                     keyword: 'required',
                     params: {
                        missingProperty: "password"
                     }
                  }
               ]
            }
         });
         
      const hashedPassword = await bcrypt.hash(plainPassword, saltRounds).then(hash => hash)
      newUser.password = hashedPassword;
      return await this.query().insert(newUser);
   }
   
}

module.exports = Person;