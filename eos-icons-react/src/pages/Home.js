import React from 'react';
import PageHeader from '../components/PageHeader'
import Button from '../components/Button'
import Link from '../components/Link'

function Home () {
  return (
    <>
      <PageHeader size="medium" theme="orange">
        <h2>
          Free. Open source. Vector and pixel-perfect icons. The iconic font your product needs.
        </h2>
      </PageHeader>
      Testing buttons
      <br />
      <Button>
        default btn
      </Button>
      <Button primary>
        primary btn
      </Button>
      <br />
      Teting Links with btn class
      <Link name='This is a default' href='test' external button />
      <Link name='This is a primary' href='test' external button='primary' />
    </>
  );
}

export default Home