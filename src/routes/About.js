import React from 'react';
import { USER_DETAILS } from "../queries/user";
import { useQuery } from "react-apollo-hooks";
import Loading from '../components/Loading';
import Error from '../components/Error';
import NoMatch from '../components/NoMatch';

const About = ({
  match: {
    params: { uid }
  }
}) => {
  const { loading, error, data } = useQuery(USER_DETAILS, {
    variables: { uid }
  });
  if (loading) return <Loading />; // Loading Component
  if (error) return <Error />; // Error Component
  if (data.user === null) return <NoMatch />; // NoMatch Component
  return (
    <div>
        { data.user.name }
        { data.user.address.office[0] }
    </div>
  );
};

export default About;
