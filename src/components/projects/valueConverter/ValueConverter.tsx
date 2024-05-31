import React from "react";
import "./style.css";

const defaultCurrencies: string[] = ['USD', 'EUR', 'AMD'];
const defaultRates: any = {
  AMD: 4.324904,
  USD: 0.01113748,
  EUR: 0.01029498,
};

const ValueConverterBlock: React.FC<any> = ({
  inputValue,
  onChangeInputValue,
  currencyValue,
  onChangeCurrencyValue
}) => {
  return (
    <div className="converter-block">
      <ul className="converter-block__currencies">
        {defaultCurrencies.map((currency) => (
          <li
            key={currency}
            onClick={() => onChangeCurrencyValue(currency)}
            className={currencyValue === currency ? 'converter-block__currencies--active' : ''}
          >
            {currency}
          </li>
        ))}
      </ul>
      <input
        className="converter-block__input"
        onChange={(e) => onChangeInputValue(e.target.value)}
        value={inputValue}
        type="number"
        placeholder={"0"}
      />
    </div>
  )
};

export const ValueConverter: React.FC = () => {
  const [fromInputValue, setFromInputValue] = React.useState<any>(1);
  const [fromCurrencyValue, setFromCurrencyValue] = React.useState<any>('USD');
  const [toInputValue, setToInputValue] = React.useState<any>(0);
  const [toCurrencyValue, setToCurrencyValue] = React.useState<any>('USD');

  React.useEffect(() => {
    toInputHandler(toInputValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toCurrencyValue]);

  React.useEffect(() => {
    fromInputHandler(fromInputValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fromCurrencyValue]);

  React.useEffect(() => {
    fromInputHandler(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fromInputHandler = (value: number) => {
    const result = (defaultRates[toCurrencyValue] / defaultRates[fromCurrencyValue]) * value;

    setToInputValue(result.toFixed(3));
    setFromInputValue(value);
  };

  const toInputHandler = (value: number) => {
    const result = (defaultRates[fromCurrencyValue] / defaultRates[toCurrencyValue]) * value;

    setFromInputValue(result.toFixed(3));
    setToInputValue(value);
  };

  return (
    <div className="converter-countainer">
      <ValueConverterBlock
        inputValue={fromInputValue}
        onChangeInputValue={fromInputHandler}
        currencyValue={fromCurrencyValue}
        onChangeCurrencyValue={setFromCurrencyValue}
      />
      <ValueConverterBlock
        inputValue={toInputValue}
        onChangeInputValue={toInputHandler}
        currencyValue={toCurrencyValue}
        onChangeCurrencyValue={setToCurrencyValue}
      />
    </div>
  );
};
