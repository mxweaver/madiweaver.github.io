import React, { FunctionComponent } from 'react';
import { Link as DOMLink } from 'react-router-dom';
import classnames from 'classnames';
import URI from 'urijs';
import c from './Link.scss';

interface Props {
  to: string;
  className?: string;
  children?: React.ReactNode;
}

const Link: FunctionComponent = (props: Props) => {
  const { to, className, children } = props;

  const alteredClassName = classnames(className, c.link);
  const uri = URI(to);

  if (uri.protocol() === '' && uri.domain() === '') {
    return (
      <DOMLink to={to} className={alteredClassName}>
        {children}
      </DOMLink>
    );
  } if (['', 'http', 'https'].includes(uri.protocol())) {
    return (
      <a
        href={to}
        className={alteredClassName}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.children}
      </a>
    );
  }

  return (
    <a href={to} className={alteredClassName}>
      {children}
    </a>
  );
};

Link.defaultProps = {
  className: undefined,
  children: undefined,
};

export default Link;
