import React from "react";
import { IonCard, IonCol, IonRow } from "@ionic/react";

const BmiResult: React.FC<{ result: number }> = (props) => {
  return (
    <IonRow>
      <IonCol>
        <IonCard>
          <h2 className="ion-text-center">Dein BMI lautet:</h2>
          <h3 className="ion-text-center">{props.result.toFixed(2)}</h3>
        </IonCard>
      </IonCol>
    </IonRow>
  );
};

export default BmiResult;
