import React from 'react'
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import CollectionPage from './collection.component';
import Spinner from '../../components/spinner/spinner.component';

// Dollar sign syntax is used to make ttile a dynamic variable.
const GET_COLLECTION_BY_TITLE = gql`
    query getCollectionsByTitle($title: String!) {
        getCollectionsByTitle(title: $title) {
            id 
            title 
            items {
                id 
                name 
                price 
                imageUrl
            }
        }
    }
`;



const CollectionPageConatainer = ({ match }) => (
        <Query
            query={GET_COLLECTION_BY_TITLE}
            variables={‌{ title: match.params.collectionId }}
        >
            {({ loading, data }) => {
            if (loading) return <Spinner />;
            const { getCollectionsByTitle } = data; 
            return <CollectionPage collection={getCollectionsByTitle} />;
            }}
        </Query>
    );

export default CollectionPageConatainer;
