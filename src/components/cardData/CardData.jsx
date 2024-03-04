import React from "react";
import Card from "../Card";

function CardData(){
    return (
        <div className=" p-8 container mx-auto">
        <table>
          <tr className="mb-1">
            <td className="pr-6"><Card img="https://images.pexels.com/photos/108370/pexels-photo-108370.jpeg" name="Vanilla IceCream" flavour="Milk_Vanilla" price="35" quantity="100g"/></td>
            <td className="pr-6"><Card img="https://www.tashasartisanfoods.com/blog/wp-content/uploads/2018/06/choc-icecream-4.jpg" name="ChocoDelite" flavour="Choclate" price="40" quantity="100g"/></td>
            <td><Card img="https://th.bing.com/th/id/OIP.4-RO_1KIt24UcAI4j6Up0QHaE6?rs=1&pid=ImgDetMain" name="Strawberry Cup" flavour="Strwaberry" price="45" quantity="100g" /></td>
          </tr>
          <tr>
            <td className="pr-6"><Card img="https://images.pexels.com/photos/108370/pexels-photo-108370.jpeg" name="" flavour="" price="" quantity=""/></td>
            <td className="pr-6"><Card img="https://images.pexels.com/photos/108370/pexels-photo-108370.jpeg" name="" flavour="" price="" quantity=""/></td>
            <td><Card img="https://images.pexels.com/photos/108370/pexels-photo-108370.jpeg" name="" flavour="" price="" quantity=""/></td>
          </tr>
          <tr>
            <td className="pr-6"><Card img="https://images.pexels.com/photos/108370/pexels-photo-108370.jpeg" name="" flavour="" price="" quantity=""/></td>
            <td className="pr-6"><Card img="https://images.pexels.com/photos/108370/pexels-photo-108370.jpeg" name="" flavour="" price="" quantity=""/></td>
            <td><Card img="https://images.pexels.com/photos/108370/pexels-photo-108370.jpeg" name="" flavour="" price="" quantity=""/></td>
          </tr>
          <tr>
            <td className="pr-6"><Card img="https://images.pexels.com/photos/108370/pexels-photo-108370.jpeg" name="" flavour="" price="" quantity=""/></td>
            <td className="pr-6"><Card img="https://images.pexels.com/photos/108370/pexels-photo-108370.jpeg" name="" flavour="" price="" quantity=""/></td>
            <td><Card img="https://images.pexels.com/photos/108370/pexels-photo-108370.jpeg" name="" flavour="" price="" quantity=""/></td>
          </tr>
          <tr>
            <td className="pr-6"><Card img="https://images.pexels.com/photos/108370/pexels-photo-108370.jpeg" name="" flavour="" price="" quantity=""/></td>
            <td className="pr-6"><Card img="https://images.pexels.com/photos/108370/pexels-photo-108370.jpeg" name="" flavour="" price="" quantity=""/></td>
            <td><Card img="https://images.pexels.com/photos/108370/pexels-photo-108370.jpeg" name="" flavour="" price="" quantity=""/></td>
          </tr>
        </table>
      </div>
    )

}
export default CardData