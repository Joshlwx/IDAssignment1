let momobae ={
    Name: 'Momobae',
    Speciality: 'K-Pop',
    Power: 49,
    Hitpoints: 28,
    Level: 7,
    Gender: 'Female'
};

console.log(momobae);

function Singer(Name, Speciality, Power, Hitpoints, Level, Gender){
        this.Name = Name;
        this.Speciality = Speciality;
        this.Power = Power;
        this.Hitpoints = Hitpoints;
        this.Level = Level;
        this.Gender = Gender;

        this.calculateMaxPower = function(){
            (this.Power * this.Level) - this.Hitpoints; 
            console.log(calculateMaxPower);
        };

        this.singerProfile = Singer
        console.log(Name, Level, "gender", Gender, "speciality", Speciality,
        "Power", Power,
        "Hitpoints: ", Hitpoints);
    };




