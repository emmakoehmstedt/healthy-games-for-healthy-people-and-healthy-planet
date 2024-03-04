import { createContext, useContext, useState } from "react";

const CalculatorContext = createContext();
const CalculatorUpdateContext = createContext();

//use this in other components to access the calculatorItems state
export function useCalculator() {
  return useContext(CalculatorContext);
}

//use this in other components to access the functions to update the
//calculator items state
export function useCalculatorUpdate() {
  return useContext(CalculatorUpdateContext);
}

export function CalculatorProvider({ children }) {
  const [calculatorItems, setCalculatorItems] = useState([]);

  function onAddToCalculator(newFoodItem) {
    setCalculatorItems((prevFoods) => [newFoodItem, ...prevFoods]);
  }

  function onRemoveFromCalculator(id) {
    setCalculatorItems((prevFoods) =>
      prevFoods.filter((food) => food.id !== id)
    );
  }

  function isInCalculator(id) {
    return calculatorItems.some((item) => item.id === id);
  }

  function onClearCalculator() {
    setCalculatorItems([]);
  }

  return (
    <CalculatorContext.Provider value={calculatorItems}>
      <CalculatorUpdateContext.Provider
        value={{
          onAddToCalculator,
          onRemoveFromCalculator,
          isInCalculator,
          onClearCalculator,
        }}
      >
        {children}
      </CalculatorUpdateContext.Provider>
    </CalculatorContext.Provider>
  );
}
