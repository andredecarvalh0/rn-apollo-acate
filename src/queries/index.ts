import { gql } from '@apollo/client';

const INFO_PERSON = gql`
    query {
        characters {
            results{
                id
                name
                gender
                species
                gender
                status
                image
            }
        }
    }
`

export default INFO_PERSON;