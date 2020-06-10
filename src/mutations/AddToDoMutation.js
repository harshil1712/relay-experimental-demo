import environment from '../RelayEnvironment'
import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";

export const AddToDoMutation = graphql`
mutation AddToDoMutation ($input: ToDo_insert_input!){
    insert_ToDo_one(object: $input){
        id
        item
    }
}
`;

export const commitFunc = (item, callback) => {
    const variables ={
        input: {
            item
        }
    }

    commitMutation(environment, {
        AddToDoMutation,
        variables,
        onCompleted: ()=> {
            console.log('success')
        },
        onError: err => console.error(err)
    })

}
