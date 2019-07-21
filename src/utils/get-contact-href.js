// @flow
const getContactHref = (name: string, contact: string) => {
  let href;

  switch (name) {
    case 'twitter':
      href = `https://www.twitter.com/rossysheil${contact}`;
      break;
    case 'github':
      href = `https://github.com/rossysheil${contact}`;
      break;
    case 'vkontakte':
      href = `https://vk.com/${contact}`;
      break;
    case 'telegram':
      href = `telegram:${contact}`;
      break;
    case 'email':
      href = `mailto:rossjsheil@gmail.com${contact}`;
      break;
    default:
      href = contact;
      break;
  }

  return href;
};

export default getContactHref;
