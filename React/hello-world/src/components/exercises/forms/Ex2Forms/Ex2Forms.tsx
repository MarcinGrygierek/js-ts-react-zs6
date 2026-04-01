import { useCheckbox } from "./hooks/useCheckbox";
import { useInput } from "./hooks/useInput";

export const Ex2Forms = () => {
  const wheels = useInput();
  const roof = useCheckbox();
  const exhaust = useCheckbox();
  const windows = useCheckbox();
  const paintwork = useInput();

  const getGrandTotal = () => {
    let total = 0;

    const parsedWheels = parseInt(wheels.value);

    total += isNaN(parsedWheels) ? 0 : parsedWheels * 100;

    if (roof.checked) total += 5000;
    if (exhaust.checked) total += 1000;
    if (windows.checked) total += 500;

    switch (paintwork.value) {
      case "metallic": {
        total += 1000;
        break;
      }
      case "pearl": {
        total += 10000;
        break;
      }
      case "mat": {
        total += 500;
        break;
      }
    }

    return total;
  };

  const orderTotal = getGrandTotal();

  return (
    <>
      <p>Total: {orderTotal}</p>
      <input type="number" name="wheels" {...wheels} />
      <label htmlFor="roof">
        <input type="checkbox" name="roof" id="roof" {...roof} />
        Convertible
      </label>
      <label htmlFor="exhaust">
        <input type="checkbox" name="exhaust" id="exhaust" {...exhaust} />
        Double exhaust
      </label>
      <label htmlFor="windows">
        <input type="checkbox" name="windows" id="windows" {...windows} />
        Electric windows
      </label>
      <select name="paintwork" {...paintwork}>
        <option value="metallic">Metallic</option>
        <option value="pearl">Pearl</option>
        <option value="mat">Mat</option>
      </select>
    </>
  );
};
