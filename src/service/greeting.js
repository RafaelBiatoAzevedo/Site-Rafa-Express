const date = new Date();

const hour = date.getHours();

const greeting = () => {
  if (hour >= 18) return 'Boa Noite';
  else if (hour < 18 && hour >= 12) return 'Boa Tarde';
  return 'Bom dia';
}

export default greeting;
