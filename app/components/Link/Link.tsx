import React, { FC } from 'react';
import { Link as DOMLink } from 'react-router-dom';
import URI from 'urijs';
import c from './Link.scss';

interface Props {
  to: string;
  children?: React.ReactNode;
}

const Link: FC<Props> = (props: Props) => {
  const { to, children } = props;
  const uri = URI(to);

  if (uri.protocol() === '' && uri.domain() === '') {
    return (
      <DOMLink to={to} className={c.link}>
        {children}
      </DOMLink>
    );
  }

  if (['', 'http', 'https'].includes(uri.protocol())) {
    return (
      <a
        href={to}
        className={c.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.children}
      </a>
    );
  }

  return (
    <a href={to} className={c.link}>
      {children}
    </a>
  );
};

Link.defaultProps = {
  children: undefined,
};

export default Link;
