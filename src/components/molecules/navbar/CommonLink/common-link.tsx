import { CommonLinkProps } from './common-link.interface';
import {
  CommonLinkContainer,
  CommonLinkIcon,
  CommonLinkText,
  CommonLinkStyle,
} from './common-link.styled';

export const CommonLink = ({
  icon,
  text,
  url,
  color,
  expanded,
  ...rest
}: CommonLinkProps) => {
  return (
    <CommonLinkContainer {...rest} color={color}>
      <CommonLinkStyle href={url} target="_blank" rel="noreferrer">
        <CommonLinkIcon icon={icon} />
        <CommonLinkText expanded={expanded} text={text} />
      </CommonLinkStyle>
    </CommonLinkContainer>
  );
};
