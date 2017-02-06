import React, { PropTypes } from 'react';
import injectSheet from './custom-react-jss';
import cn from 'classnames';
import c from 'color';

const merge = (x, y) => Object.assign({}, x, y);

const rootNode = val => ({ rootNode: val });

const theme = {};

theme.color = {
  // Start with assigning color names to specific hex values.
  white:  '#fff',
  black:  '#000',
  red:    '#d9534f',
  orange: '#f0ad4e',
  yellow: '#ffd500',
  green:  '#5cb85c',
  blue:   '#0275d8',
  teal:   '#5bc0de',
  pink:   '#ff5b77',
  purple: '#613d7c',

  // Create grayscale
  grayDark:     '#292b2c',
  gray:         '#464a4c',
  grayLight:    '#636c72',
  grayLighter:  '#eceeef',
  grayLightest: '#f7f7f9',
};

// Reassign color vars to semantic color scheme
theme.color.variant = {
  primary:   theme.color.blue,
  secondary: theme.color.white,
  success:   theme.color.green,
  info:      theme.color.teal,
  warning:   theme.color.orange,
  danger:    theme.color.red,
  inverse:   theme.color.grayDark,
}

const basic = {
  all: 'initial',
  fontFamily: '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
  fontSize: 16,
  fontWeight: 400,
  lineHeight: 1.5,
  color: theme.color.grayDark,
  boxSizing: 'border-box',
}

const styles = {
  button: merge(basic, {
    display: 'inline-block',
    fontWeight: 400,
    lineHeight: 1.25,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    userSelect: 'none',
    border: '1px solid transparent',
    transition: 'all .2s ease-in-out',
    cursor: 'pointer',
  }),
  block: {
    display: 'block',
    width: '100%',
  },
  active: {},
  disabled: {
    cursor: 'not-allowed',
    opacity: .65,
  },
}

Object.keys(theme.color.variant).forEach(key => {
  const variantColor = theme.color.variant[key];
  styles[key] = {
    backgroundColor: variantColor,
    borderColor: key !== 'secondary' ? c(variantColor).darken(0.1).hex() : '#ccc',
    color: key !== 'secondary' ? theme.color.white : theme.color.grayDark,
    '&:not($active):not($disabled):hover': {
      backgroundColor: c(variantColor).darken(0.2).hex(),
    },
    '&:not($active):not($disabled):active, &$active': {
      backgroundColor: c(variantColor).darken(0.3).hex(),
    },
  },
  styles[key+'-outline'] = {
    backgroundColor: theme.color.white,
    borderColor: key !== 'secondary' ? c(variantColor).darken(0.1).hex() : '#ccc',
    color: key !== 'secondary' ? c(variantColor).darken(0.1).hex() : '#ccc',
    '&:not($active):not($disabled):hover': {
      backgroundColor: c(variantColor).darken(0.2).hex(),
      color: key !== 'secondary' ? theme.color.white : theme.color.grayDark,
    },
    '&:not($active):not($disabled):active, &$active': {
      backgroundColor: c(variantColor).darken(0.3).hex(),
      color: key !== 'secondary' ? theme.color.white : theme.color.grayDark,
    },
  }
})

styles['size-l'] = {
  padding: '.75rem 1.5rem',
  fontSize: '1.25rem',
  borderRadius: '.3rem',
}

styles['size-m'] = {
  padding: '.5rem 1rem',
  fontSize: '1rem',
  borderRadius: '.25rem',
}

styles['size-s'] = {
  padding: '.25rem .5rem',
  fontSize: '.875rem',
  borderRadius: '.2rem',
}

Object.keys(styles).forEach(k => {
  const v = styles[k];
  styles[k] = merge(rootNode(true), v);
});

styles.icon = merge(rootNode(false), {
  display: 'inline-block',
  width: '1rem',
  height: '1rem',
  color: 'white',
  // marginRight: '0.3rem',
  // verticalAlign: 'mi',
});

const Button = ({
  sheet: { classes, id },
  children,
  variant,
  tag: Tag,
  type,
  href,
  outline,
  size,
  block,
  active,
  disabled,
  onClick,
  icon
}) => {
  const isInput = Tag === 'input';
  const isLink = Tag === 'a';
  return (
    <Tag
      className={cn({
        [classes.button]: true,
        [classes[variant]]: !outline,
        [classes[variant+'-outline']]: outline,
        [classes['size-'+size]]: size,
        [classes.block]: block,
        [classes.active]: active,
        [classes.disabled]: disabled,
      })}
      id={ id }
      onClick={ onClick }
      type={ type }
      value={ isInput ? children : null  }
      href={ href ? href : null  }
      role={ isLink ? 'button' : null }
      disabled={ disabled ? true : null }
      aria-pressed={ (isLink && active) ? true : null }
      aria-disabled={ (isLink && disabled) ? true : null }
    >
      { icon
        ? (<span className={cn({ [classes.icon]: true })} >✓</span>)
        : null
      }
      { icon ? ' ' : null }
      { !isInput ? children : null }
    </Tag>
  );
};

Button.propTypes = {
  /**
   * JSS stylesheet's classes object
   */
  sheet: PropTypes.object,
  /**
   * Anything that can be rendered for Buttons and Text for tag="inputs" placed in `value` attribute
   */
  children: PropTypes.node,
  /**
   * onClick handler
   */
  onClick: PropTypes.func,
  /**
   * Variant
   */
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'info', 'warning', 'danger']).isRequired,
  /**
  * Outline
  */
  outline: PropTypes.bool,
  /**
  * Size
  */
  size: PropTypes.oneOf(['s', 'm', 'l']),
  /**
   * Tag
   */
  tag: PropTypes.string,
  /**
   * type attribute for tag="inputs"
   */
  type: PropTypes.string,
  /**
   * href attribute for tag="a"
   */
  href: PropTypes.string,
  /**
   * Block
   */
  block: PropTypes.bool,
  /**
   * Active state
   */
  active: PropTypes.bool,
  /**
   * Disabled state
   */
  disabled: PropTypes.bool,
  /**
   * Icon
   */
  icon: PropTypes.bool,
}

Button.defaultProps = {
  tag: 'button',
  type: 'button',
  outline: false,
  size: 'm',
  block: false,
  href: null,
  active: false,
  icon: false,
  disabled: false,
  onClick: ()=>{},
}

export default injectSheet(styles)(Button);
