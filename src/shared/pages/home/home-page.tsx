import React, { useEffect, useState } from 'react';
import { ColSection } from 'shared/components/section';
import { PageLayout } from 'shared/layouts/page';
import './home-page.scss';

interface ISizeRef {
  height: number;
  width: number;
}

export const HomePage: React.FC = () => {
  const [sizes, setSizes] = useState<ISizeRef>({ height: 0, width: 0 });

  useEffect(() => {
    const onResizeHandler = () => {
      setSizes({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    window.addEventListener('resize', onResizeHandler);
    onResizeHandler();

    return () => {
      window.removeEventListener('resize', onResizeHandler);
    };
  }, []);

  return (
    <PageLayout className="home-page" header="Home" title="Home">
      <ColSection>
        <p>Outline of this project, as per PDF displayed below</p>
        <embed
          src="/assets/challenge.pdf"
          width={sizes.width - 48}
          height={sizes.height - 200}
          type="application/pdf"
        />
      </ColSection>
    </PageLayout>
  );
};
