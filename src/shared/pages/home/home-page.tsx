import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ColSection } from 'shared/components/section';
import { ROBOT_CHALLENCE, TABS_CHALLENCE } from 'shared/constants/statics';
import { PageLayout } from 'shared/layouts/page';
import { useWindowSize } from 'shared/utils/use-window-resize';
import './home-page.scss';

export const HomePage: React.FC = () => {
  const textContainer = useRef<HTMLDivElement | null>(null);
  const { height, width } = useWindowSize();
  const [filePath, setFilePath] = useState(TABS_CHALLENCE);

  const onSelectPdf = (pdf: string) => {
    if (pdf !== filePath) {
      setFilePath(pdf);
    }
  };

  return (
    <PageLayout className="home-page" header={<h1>Home</h1>} title="Home">
      <ColSection
        header={{
          actions: [
            {
              action: () => onSelectPdf(TABS_CHALLENCE),
              label: 'Tabs',
            },
            {
              action: () => onSelectPdf(ROBOT_CHALLENCE),
              label: 'Robot',
            },
          ],
          bottomBorder: true,
          title: 'Coding challenges',
        }}
      >
        <div ref={textContainer}>
          <p>
            The coding challenge demonstrations can be found under the{' '}
            <NavLink to="/demo">Demo</NavLink> section of this app. Now, as is
            probably evident from the look and feel of this project, I am not
            the most confident in my eye for aesthetically pleasing design, as I
            am more comfortable leaving design principles and themes to third
            party styling libraries.
          </p>
          <p>
            Whilst completely unnecessary, I felt that the Tabs Challenge alone
            didn&apos;t feel complete, so I attempted both challenges sent to
            me. I hope that this demonstrates several of my skills and is not
            perceived as a misunderstanding of the requirements, thereby huring
            my chances. My intention is to allow the reviewer to get a better
            understanding of my coding styles, thus ensuring that my code can
            speak for itself on whether I am a good fit for the company.
          </p>
        </div>
        <br />
        <embed
          src={filePath}
          width={width - 48}
          height={height - (260 + (textContainer.current?.clientHeight || 0))}
          type="application/pdf"
        />
      </ColSection>
    </PageLayout>
  );
};
