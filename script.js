document.getElementById("marchzins-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const capital = parseFloat(document.getElementById("capital").value);
  const interestRate = parseFloat(document.getElementById("interest-rate").value);
  const birthdayStr = document.getElementById("birthday").value;
  const resultDiv = document.getElementById("result");

  const birthday = new Date(birthdayStr);
  const daysWithBonus = birthday.getDate();
  const bonusRate = interestRate + 1;
  const bonusInterest = capital * (bonusRate / 100) * (daysWithBonus / 360);

  resultDiv.innerHTML = `
            <div class="calculation-steps">
                <h3>Berechnung Schritt für Schritt:</h3>
                <div class="step">
                    <strong>1. Eingabewerte:</strong><br>
                    Startkapital: ${capital.toLocaleString('de-CH')} CHF<br>
                    Zinssatz: ${interestRate}%<br>
                    Geburtstag: ${birthday.getDate()}. ${birthday.toLocaleString("de-CH", { month: "long" })}
                </div>
                <div class="step">
                    <strong>2. Marchzins-Zeitraum:</strong><br>
                    Vom 1. bis ${birthday.getDate()}. ${birthday.toLocaleString("de-CH", { month: "long" })} = ${daysWithBonus} Tage
                </div>
                <div class="step">
                    <strong>3. Bonus-Zinssatz:</strong><br>
                    ${interestRate}% + 1% = ${bonusRate}%
                </div>
                <div class="step">
                    <strong>4. Berechnung:</strong><br>
                    ${capital.toLocaleString('de-CH')} CHF × ${bonusRate}% × (${daysWithBonus} Tage ÷ 360 Tage) = ${bonusInterest.toFixed(2)} CHF
                </div>
                <div class="step" style="background-color: #e8f5e8; border-left-color: #28a745;">
                    <strong>Ergebnis:</strong><br>
                    <strong>Marchzins-Bonus: ${bonusInterest.toFixed(2)} CHF</strong>
                </div>
            </div>
        `;
});

document.getElementById("reset-btn").addEventListener("click", function() {
    document.getElementById("marchzins-form").reset();
    document.getElementById("result").innerHTML = "";
});
