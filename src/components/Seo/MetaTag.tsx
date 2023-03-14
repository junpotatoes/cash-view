import { Helmet } from 'react-helmet';

function MetaTag() {
  return (
    <Helmet>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta
        http-equiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Account Book</title>
      <meta name="description" content="편리한 웹앱 가계부" />
    </Helmet>
  );
}

export default MetaTag;
