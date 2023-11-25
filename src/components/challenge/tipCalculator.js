import { useState } from 'react';

export default function TipCalculator() {
  const [value, setValue] = useState('');
  const [tip, setTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  function Reset() {
    setFriendTip(0);
    setTip(0);
    setValue('');
  }

  return (
    <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
      <Bill value={value} onSetValue={setValue} />
      <Tip tip={tip} onSetTip={setTip}>
        <p>How did you like the service?</p>
      </Tip>
      <Tip tip={friendTip} onSetTip={setFriendTip}>
        <p>How did your friend like the service?</p>
      </Tip>

      {value > 0 && (
        <>
          <Pay value={value} tip={tip} friendTip={friendTip} />
          <Button onReset={Reset} />
        </>
      )}
    </div>
  );
}

function Bill({ value, onSetValue }) {
  return (
    <div>
      <p>How much was the bill?</p>
      <input
        type="number"
        value={value}
        onChange={(e) => onSetValue(Number(e.target.value))}
      />
    </div>
  );
}

function Tip({ children, onSetTip }) {
  return (
    <div>
      {children}
      <select onChange={(e) => onSetTip(Number(e.target.value))}>
        <option value={0}>Dissatisdied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Pay({ value, tip, friendTip }) {
  const averageTip = (tip + friendTip) / 2;
  const valueTip = (averageTip / 100) * value;
  const finalValue = value + valueTip;

  return (
    <h3>
      You pay ${finalValue} (${value} + ${valueTip} tip)
    </h3>
  );
}

function Button({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
