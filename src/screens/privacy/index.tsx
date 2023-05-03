import React, {useEffect, useState} from 'react';

import Panel from './../../style/panel';
import privacyYAML from '../../../content/privacy.yaml';

// -----------------------------------------------------------------------------

type TextType = {
  title?: string;
  subtitle?: string;
  paragraph?: string;
  html?: string;
  list?: string[];
  icon?: unknown;
  images?: unknown;
};

type Section = {
  type: 'intro' | 'centeredText' | 'texts' | 'video' | 'images' | 'stores';
  texts: TextType[];
};

type Privacy = {
  id: string;
  title: string;
  sections: Section[];
};

// -----------------------------------------------------------------------------

type TextsProps = {
  texts: Section['texts'];
  centered: boolean;
};

const Texts = ({texts}: TextsProps) => (
  <>
    {texts.map(
      ({
        paragraph,
        list,
        html,
        // icon,
        // images,
        subtitle,
        title
      }: TextType) => (
        <div>
          {/* {icon && <Icon icon={icon} />} */}
          {/* {images && <Images projectId={projectId} images={images} />} */}
          {title && <h1>{title}</h1>}
          {subtitle && <h3>{subtitle}</h3>}
          {html && <p dangerouslySetInnerHTML={{__html: html}} />}
          {paragraph && <p>{paragraph}</p>}
          {list && (
            <ul>
              {list.map((line: string) => (
                <li>{line}</li>
              ))}
            </ul>
          )}
        </div>
      )
    )}
  </>
);

// -----------------------------------------------------------------------------

const SectionComponent = ({section}: {section: Section}) => {
  switch (section.type) {
    case 'images':
      return <p>todo section images</p>;
    case 'intro':
      return <p>todo section intro</p>;
    case 'stores':
      return <p>todo section stores</p>;
    case 'texts':
    case 'centeredText':
      return (
        <Texts
          texts={section.texts}
          centered={section.type === 'centeredText'}
        />
      );
    case 'video':
      return <p>todo section video</p>;
    // return (
    //   <iframe
    //     title="video"
    //     className={style.video}
    //     width="648px"
    //     height="400px"
    //     src={section.url}
    //     frameBorder={0}
    //     allowFullScreen
    //   />
    // );
    default:
      return (
        <p>
          <b>TODO</b>: {section.type}
        </p>
      );
  }
};

const Sections = ({sections}: {sections: Section[]}) => {
  return (
    <>
      {sections.map((section, index) => {
        return (
          <>
            <hr />
            <SectionComponent key={index} section={section} />
          </>
        );
      })}
    </>
  );
};

// -----------------------------------------------------------------------------

const PrivacyScreen = () => {
  const [privacy, setPrivacy] = useState<Privacy>();

  useEffect(() => {
    setPrivacy(privacyYAML as Privacy);
  }, []);

  if (!privacy) {
    return null;
  }

  const {sections} = privacy;

  return (
    <Panel alignItems="flex-start">
      <h1>{privacy.title}</h1>
      <Sections sections={sections} />
    </Panel>
  );
};

// -----------------------------------------------------------------------------

export default PrivacyScreen;
