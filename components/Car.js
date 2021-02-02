 class Car {
     constructor (model, fuelLevel, consumption, mileage, maxTank){
         this.model = model;
         this.engineStatus = false;
         this.fuel = fuelLevel
         this.consumption = consumption
         this.mileage = mileage 
         this.maxTank = maxTank;
     }

     carDetails(){
         const details = `Car ${this.model} has ${this.fuel} fuel in tank, current consumption is ${this.consumption}l/100km and mileage is ${this.mileage}. Engine status: ${this.engineStatus}. Max tank capacity is ${this.maxTank}l`
         console.log(details)

     }

     engineON(){
         if (this.fuel !== 0){
            this.engineStatus = true;
            console.log(`${this.model} engine was started successfully`)
         } else {
            console.log(`Tank is empty, engine is OFF. Please fill up the tank`)
         }
         
     }

     engineOFF(){
         this.engineStatus = false;
         console.log(`${this.model} engine was stopped.`)
     }

     fillup(litres){
         if (this.fuel + litres < this.maxTank){
             this.fuel += litres
             const level =  Math.floor(this.fuel / this.maxTank * 100);
             console.log(`Tank was filled up ${litres}l of fuel`)
             console.log(`Your tank is currently ${level}%`)
         } else {
            this.fuel += this.maxTank - this.fuel
            console.log(`Your tank is FULL`)
         }

     }

     drive(mileage) {
        const consumption = mileage * (this.consumption / 100)
        if (!this.engineStatus){
            console.log(`${this.model} car engine is OFF. Use engineON()`)
            return
        }
        if (this.fuel <= 0) {
            this.engineOFF()
            console.log(`Tank is empty, engine is OFF. Please fill up the tank`)
            return
        }

        if (this.fuel !== 0 && 
            this.fuel - consumption > 0){
                this.fuel -= mileage * (this.consumption / 100)
                this.mileage += mileage
                console.log(`Driving...`)
        } else {
            this.mileage += (this.fuel / (this.consumption / 100))
            this.fuel -= this.fuel
            this.engineOFF()
            console.log(`Tank is empty, engine is OFF. Please fill up the tank`)


        }
               
     }
 }




 export {Car};