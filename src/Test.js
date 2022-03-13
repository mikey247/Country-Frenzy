const Test = () => {
  const currencies = {
    EUR: {
      name: "Euro",
      symbol: "€",
    },
    CHF: {
      name: "Franc",
      symbol: "$",
    },
  };
  for (const [key, value] of Object.entries(currencies)) {
    console.log(key, value.name);
  }

  return <></>;
};

export default Test;
