import { ComponentComposition } from "./components/ComponentComposition/ComponentComposition";
import { ComponentReturns } from "./components/ComponentReturns";
import { Composition } from "./components/Composition";
import { CompositionHeader } from "./components/CompositionHeader";
import { DynamicStylesComponent } from "./components/DynamicStylesComponent/DynamicStylesComponent";
import { Ex1Attributes } from "./components/exercises/attributes/Ex1Attributes";
import { Ex2Attributes } from "./components/exercises/attributes/Ex2Attributes";
import { Ex3Attributes } from "./components/exercises/attributes/Ex3Attributes";
import { Ex1Components } from "./components/exercises/components/Ex1Components";
import { Ex2Components } from "./components/exercises/components/Ex2Components";
import { ExComposition } from "./components/exercises/composition/ExComposition";
import { Ex1Events } from "./components/exercises/events/Ex1Events";
import { Ex2Events } from "./components/exercises/events/Ex2Events";
import { Ex1Lists } from "./components/exercises/lists-and-keys/Ex1Lists";
import { Ex2Lists } from "./components/exercises/lists-and-keys/Ex2Lists";
import { ExpressionAsCont } from "./components/ExpressionAsConst";
import { FunctionsAsPropsParent } from "./components/FunctionsAsProps/FunctionsAsPropsParent";
import { Hello } from "./components/Hello";
import { NestingArrayElement } from "./components/NestingArrayElements";
import { NestingElement } from "./components/NestingElements";
import { PropsDrilling } from "./components/PropsDrilling/PropsDrilling";
import { StyledComponent } from "./components/StyledComponent/StyledComponent";

export const App = () => {
  return (
    <>
      {/* <Hello name="Marcin" lastName="Grygierek" />
      <Hello name="John" lastName="Doe" /> */}
      {/* <ExpressionAsCont /> */}

      {/* Stylowanie CSS
     wykorzystując import './Styles.css' mozna doprowadzic do wycieku styli - lepiej CSS Modules
     */}
      {/* <StyledComponent />
      <div className="icon-plus">Lorem ipsum</div> */}

      {/* Stylowanie inline */}
      {/* <DynamicStylesComponent /> */}

      {/* Atrybuty - ćwiczenia */}
      {/* <Ex1Attributes />
      <Ex2Attributes />
      <Ex3Attributes /> */}

      {/* <NestingElement /> */}
      {/* <NestingArrayElement /> */}

      {/* Listy i klucze - ćwiczenia */}
      {/* <Ex1Lists /> */}
      {/* <Ex2Lists /> */}

      {/* <ComponentReturns /> */}

      {/* Komponent - ćwiczenia */}
      {/* <Ex1Components /> */}
      {/* <Ex2Components /> */}
      {/* <Composition /> */}
      {/* <ComponentComposition /> */}
      {/* <CompositionHeader
        left={<a href="https://google.pl">google.pl</a>}
        right={<button>Checkout</button>}
      >
        <h1>Page title</h1>
      </CompositionHeader> */}

      {/* <PropsDrilling /> */}

      {/* Kompozycja - ćwiczenie */}
      {/* <ExComposition /> */}

      {/* <FunctionsAsPropsParent /> */}

      {/* Zdarzenia - ćwiczenia       */}
      {/* <Ex1Events /> */}
      <Ex2Events />
    </>
  );
};
