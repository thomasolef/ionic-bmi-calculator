import React, { useRef, useState } from "react";
import {
  IonAlert,
  IonApp,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonRow,
  IonTitle,
  IonToolbar,
  setupIonicReact,
} from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import BmiControls from "./components/BmiControls";
import BmiResult from "./components/BmiResult";

setupIonicReact();

const App: React.FC = () => {
  const [calculatedBmi, setCalculatedBmi] = useState<number>();
  const [error, setError] = useState<string>();
  const weightInputRef = useRef<HTMLIonInputElement>(null);
  const heightInputRef = useRef<HTMLIonInputElement>(null);

  const calculateBMI = () => {
    const enteredWeight = weightInputRef.current?.value;
    const enteredHeight = heightInputRef.current?.value;

    if (
      !enteredHeight ||
      !enteredWeight ||
      +enteredHeight <= 0 ||
      +enteredWeight <= 0
    ) {
      setError("Bitte geben Sie gültige Werte ein!");
      return;
    }
    const bmi =
      +enteredWeight / (((+enteredHeight / 100) * +enteredHeight) / 100);
    setCalculatedBmi(bmi);
  };

  const resetInputs = () => {
    weightInputRef.current!.value = "";
    heightInputRef.current!.value = "";
  };

  const clearError = () => {
    setError("");
  };

  return (
    <React.Fragment>
      <IonApp>
        <IonHeader>
          <IonToolbar>
            <IonTitle>BMI Rechner</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Deine Größe (in cm)</IonLabel>
                  <IonInput type="number" ref={heightInputRef}>
                    {" "}
                  </IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Dein Gewicht (in kg)</IonLabel>
                  <IonInput type="number" ref={weightInputRef}>
                    {" "}
                  </IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <BmiControls onCalculate={calculateBMI} onReset={resetInputs} />
            {calculatedBmi && <BmiResult result={calculatedBmi} />}
          </IonGrid>
        </IonContent>
      </IonApp>
      <IonAlert
        isOpen={!!error}
        message={error}
        buttons={[
          {
            text: "Okay",
            handler: clearError,
          },
        ]}
      />
    </React.Fragment>
  );
};

export default App;
