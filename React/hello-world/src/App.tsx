import { CallStack } from "./components/CallStack/CallStack";
import { ComponentComposition } from "./components/ComponentComposition/ComponentComposition";
import { ComponentForms } from "./components/ComponentForms/ComponentForms";
import { ComponentReturns } from "./components/ComponentReturns";
import { ComponentWithOwnHook } from "./components/ComponentWithOwnHook/ComponentWithOwnHook";
import { Composition } from "./components/Composition";
import { CompositionHeader } from "./components/CompositionHeader";
import { AndTest } from "./components/ConditionalRendering/AndTest";
import { ConditionalRenderingIf } from "./components/ConditionalRendering/ConditionalRenderingIf";
import { ConditionalRenderingTernary } from "./components/ConditionalRendering/ConditionalRenderingTernary";
import { DefaultName } from "./components/ConditionalRendering/DefaultName";
import { DynamicStylesComponent } from "./components/DynamicStylesComponent/DynamicStylesComponent";
import { Ex1Api } from "./components/exercises/api/Ex1Api";
import { Ex1Attributes } from "./components/exercises/attributes/Ex1Attributes";
import { Ex2Attributes } from "./components/exercises/attributes/Ex2Attributes";
import { Ex3Attributes } from "./components/exercises/attributes/Ex3Attributes";
import { Ex1CallbackMemo } from "./components/exercises/callback-memo/Ex1CallbackMemo";
import { Ex1Components } from "./components/exercises/components/Ex1Components";
import { Ex2Components } from "./components/exercises/components/Ex2Components";
import { ExComposition } from "./components/exercises/composition/ExComposition";
import { ConditionalExcercise1 } from "./components/exercises/conditional-rendering/ConditionalExcercise1";
import { ConditionalExercise2 } from "./components/exercises/conditional-rendering/ConditionalExercise2";
import { Ex1Context } from "./components/exercises/context/Ex1Context";
import { EffectExcercise2 } from "./components/exercises/effect/EffectExcercise1";
import { Ex1Events } from "./components/exercises/events/Ex1Events";
import { Ex2Events } from "./components/exercises/events/Ex2Events";
import { Ex1Forms } from "./components/exercises/forms/Ex1Forms/Ex1Forms";
import { Ex2Forms } from "./components/exercises/forms/Ex2Forms/Ex2Forms";
import { Ex1Lists } from "./components/exercises/lists-and-keys/Ex1Lists";
import { Ex2Lists } from "./components/exercises/lists-and-keys/Ex2Lists";
import { Ex1OwnHooks } from "./components/exercises/own-hooks/Ex1OwnHooks/Ex1OwnHooks";
import { Ex2OwnHooks } from "./components/exercises/own-hooks/Ex2OwnHooks/Ex2OwnHooks";
import { Ex3OwnHooks } from "./components/exercises/own-hooks/Ex3OwnHooks/Ex3OwnHooks";
import { PokeApi } from "./components/exercises/poke-api/PokeApi";
import { Ex1Routing } from "./components/exercises/routing/Ex1Routing";
import { Ex2Routing } from "./components/exercises/routing/Ex2Routing";
import { Interval } from "./components/exercises/state/Interval";
import { StateAndEffect } from "./components/exercises/state/StateAndEffect";
import { StateExcercise1 } from "./components/exercises/state/StateExcercise1";
import { StateExcercise1_V2 } from "./components/exercises/state/StateExercise1_V2";
import { StateExcercise2 } from "./components/exercises/state/StateExercise2";
import { ExpressionAsCont } from "./components/ExpressionAsConst";
import { ExtensiveRendering } from "./components/ExtensiveRendering/ExtensiveRendering";
import { Fetch } from "./components/Fetch/Fetch";
import { FunctionsAsPropsParent } from "./components/FunctionsAsProps/FunctionsAsPropsParent";
import { HeavyComponent } from "./components/HeavyComponent/HeavyComponent";
import { Hello } from "./components/Hello";
import { HW1StateEffect } from "./components/homework/HW1StateEffect";
import { HW2StateEffect } from "./components/homework/HW2StateEffect";
import { HW3StateEffect } from "./components/homework/HW3StateEffect";
import { JsonServer } from "./components/JsonServer/JsonServer";
import { NestingArrayElement } from "./components/NestingArrayElements";
import { NestingElement } from "./components/NestingElements";
import { Promises } from "./components/Promises/Promises";
import { PropsDrilling } from "./components/PropsDrilling/PropsDrilling";
import { Routing } from "./components/Routing/Routing";
import { RoutingLayout } from "./components/RoutingLayout/RoutingLayout";
import { Array } from "./components/State/Array";
import { State } from "./components/State/State";
import { StrictModeTest } from "./components/StrictModeTest/StrictModeTest";
import { StyledComponent } from "./components/StyledComponent/StyledComponent";
import { BigApp } from "./components/UsersApp/BigApp";

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
      {/* <Ex2Events /> */}
      {/* Stan komponentu */}
      {/* <State />
      <Array /> */}
      {/* Stan komponentu - ćwiczenia */}
      {/* <StateExcercise1 />
      <StateExcercise1_V2 /> */}
      {/* <StateExcercise2 /> */}
      {/* useEffect */}
      {/* <Interval defaultValue={0} /> */}
      {/* <StateAndEffect /> */}
      {/* useEffect - ćwiczenia */}
      {/* <EffectExcercise2 /> */}
      {/* StrictMode */}
      {/* <StrictModeTest /> */}
      {/* Warunkowe renderowanie */}
      {/* <ConditionalRenderingIf /> */}
      {/* <ConditionalRenderingTernary isAccess /> */}
      {/* <DefaultName name='John' /> */}
      {/* <AndTest show={false} /> */}
      {/* Warunkowe renderowanie - ćwiczenia */}
      {/* <ConditionalExcercise1 /> */}
      {/* <ConditionalExercise2 />
      <ConditionalExercise2 user={{ name: "John" }} />
      <ConditionalExercise2 user={{ name: "John", lastname: "Doe" }} />
      <ConditionalExercise2 user={{ name: "John", lastname: "Doe", age: 10 }} />
      <ConditionalExercise2 user={{ name: "John", lastname: "Doe", age: 30 }} /> */}
      {/* Zadanie domowe - state/effect */}
      {/* <HW1StateEffect /> */}
      {/* <HW2StateEffect /> */}
      {/* <HW3StateEffect /> */}
      {/* Własne hooki */}
      {/* <ComponentWithOwnHook /> */}
      {/* Ćwiczenia - własne hooki */}
      {/* <Ex1OwnHooks /> */}
      {/* <Ex2OwnHooks /> */}
      {/* <Ex3OwnHooks /> */}
      {/* <ComponentForms /> */}
      {/* Ćwiczenia - formularze */}
      {/* <Ex1Forms /> */}
      {/* <Ex2Forms /> */}

      {/* Routing */}
      {/* <Routing /> */}
      {/* <RoutingLayout /> */}

      {/* ćwiczenia - Routing */}
      {/* <Ex1Routing /> */}
      {/* <Ex2Routing /> */}

      {/* <CallStack /> */}
      {/* <Promises /> */}
      {/* <Fetch /> */}
      {/* <JsonServer /> */}

      {/* komunikacja z API - ćwiczenie */}
      {/* @TODO - rozwinąć: podział na komponenty, edycja */}
      {/* <Ex1Api /> */}
      {/* <PokeApi /> */}

      {/* Nadmierne renderowanie */}
      {/* <ExtensiveRendering /> */}
      {/* <HeavyComponent /> */}

      {/* <Ex1CallbackMemo /> */}

      {/* <BigApp /> */}

      <Ex1Context />
    </>
  );
};
