//Existe apenas em tempo de dev a interface.  Se vc tiver implementando uma lógica de negócio use uma classe mesmo.
export interface Course {
  _id: string | number;
  name: string;
  category: string;
}
