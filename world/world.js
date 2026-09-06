const DATA = {"countries":[{"id":4,"iso2":"AF","continent":"asia","name":"Afghanistan","nameTa":"ஆப்கானிஸ்தான்","capital":"Kabul","capitalTa":"காபூல்","lang":"Dari, Pashto","langTa":"தாரி, பஷ்தோ","fact":"Afghanistan is a land of high mountains at the heart of Asia, along old Silk Road paths.","factTa":"ஆப்கானிஸ்தான் ஆசியாவின் நடுவே உள்ள மலைநாடு. பழைய பட்டுப்பாதை இங்கு சென்றது.","quiz":true},{"id":8,"iso2":"AL","continent":"europe","name":"Albania","nameTa":"அல்பேனியா","capital":"Tirana","capitalTa":"திரானா","lang":"Albanian","langTa":"அல்பேனியம்","fact":"The capital of Albania is Tirana.","factTa":"அல்பேனியா நாட்டின் தலைநகர் திரானா.","quiz":false},{"id":10,"iso2":"AQ","continent":"antarctica","name":"Antarctica","nameTa":"அண்டார்டிகா","capital":"None","capitalTa":"இல்லை","lang":"Many","langTa":"பல மொழிகள்","fact":"Antarctica has no country and no capital. Scientists from many lands study ice and penguins here.","factTa":"அண்டார்டிகாவில் நாடும் தலைநகரும் இல்லை. பல நாட்டு அறிவியலாளர்கள் பனியையும் பெங்குவினையும் ஆய்கின்றனர்.","quiz":false},{"id":12,"iso2":"DZ","continent":"africa","name":"Algeria","nameTa":"அல்ஜீரியா","capital":"Algiers","capitalTa":"அல்ஜியர்ஸ்","lang":"Arabic","langTa":"அரபு","fact":"The capital of Algeria is Algiers.","factTa":"அல்ஜீரியா நாட்டின் தலைநகர் அல்ஜியர்ஸ்.","quiz":false},{"id":24,"iso2":"AO","continent":"africa","name":"Angola","nameTa":"அங்கோலா","capital":"Luanda","capitalTa":"லுவாண்டா","lang":"Portuguese","langTa":"போர்த்துகீசியம்","fact":"The capital of Angola is Luanda.","factTa":"அங்கோலா நாட்டின் தலைநகர் லுவாண்டா.","quiz":false},{"id":31,"iso2":"AZ","continent":"asia","name":"Azerbaijan","nameTa":"அசர்பைஜான்","capital":"Baku","capitalTa":"பாகு","lang":"Azerbaijani","langTa":"அசர்பைஜான்","fact":"The capital of Azerbaijan is Baku.","factTa":"அசர்பைஜான் நாட்டின் தலைநகர் பாகு.","quiz":false},{"id":32,"iso2":"AR","continent":"sa","name":"Argentina","nameTa":"அர்ஜென்டினா","capital":"Buenos Aires","capitalTa":"புவெனஸ் அயர்ஸ்","lang":"Spanish","langTa":"ஸ்பானிஷ்","fact":"Argentina is famous for the tango, wide grasslands called the Pampas, and the Andes mountains.","factTa":"அர்ஜென்டினா டாங்கோ நடனத்திற்கும் பாம்பாஸ் புல்வெளிக்கும் ஆண்டிஸ் மலைகளுக்கும் பெயர் பெற்றது.","quiz":true},{"id":36,"iso2":"AU","continent":"oceania","name":"Australia","nameTa":"ஆஸ்திரேலியா","capital":"Canberra","capitalTa":"கான்பரா","lang":"English","langTa":"ஆங்கிலம்","fact":"Australia is both a country and a continent. Kangaroos and koalas live only here.","factTa":"ஆஸ்திரேலியா ஒரு நாடும் ஒரு கண்டமும். கங்காருவும் கோலாவும் இங்கு மட்டுமே உள்ளன.","quiz":true},{"id":40,"iso2":"AT","continent":"europe","name":"Austria","nameTa":"ஆஸ்திரியா","capital":"Vienna","capitalTa":"வியன்னா","lang":"German","langTa":"ஜெர்மன்","fact":"The capital of Austria is Vienna.","factTa":"ஆஸ்திரியா நாட்டின் தலைநகர் வியன்னா.","quiz":false},{"id":44,"iso2":"BS","continent":"na","name":"Bahamas","nameTa":"பஹாமாஸ்","capital":"Nassau","capitalTa":"நாசாவ்","lang":"English","langTa":"ஆங்கிலம்","fact":"The capital of Bahamas is Nassau.","factTa":"பஹாமாஸ் நாட்டின் தலைநகர் நாசாவ்.","quiz":false},{"id":50,"iso2":"BD","continent":"asia","name":"Bangladesh","nameTa":"வங்கதேசம்","capital":"Dhaka","capitalTa":"டாக்கா","lang":"Bengali","langTa":"வங்காளம்","fact":"Bangladesh sits on the great Ganges-Brahmaputra delta. The Royal Bengal tiger lives in the Sundarbans.","factTa":"வங்கதேசம் கங்கை-பிரம்மபுத்திரா சமவெளியில் உள்ளது. சுந்தரவனத்தில் புலிகள் வாழ்கின்றன.","quiz":true},{"id":51,"iso2":"AM","continent":"asia","name":"Armenia","nameTa":"அர்மீனியா","capital":"Yerevan","capitalTa":"எரெவான்","lang":"Armenian","langTa":"அர்மீனியம்","fact":"The capital of Armenia is Yerevan.","factTa":"அர்மீனியா நாட்டின் தலைநகர் எரெவான்.","quiz":false},{"id":56,"iso2":"BE","continent":"europe","name":"Belgium","nameTa":"பெல்ஜியம்","capital":"Brussels","capitalTa":"புரூசல்ஸ்","lang":"Dutch, French","langTa":"டச்சு, பிரெஞ்சு","fact":"The capital of Belgium is Brussels.","factTa":"பெல்ஜியம் நாட்டின் தலைநகர் புரூசல்ஸ்.","quiz":false},{"id":64,"iso2":"BT","continent":"asia","name":"Bhutan","nameTa":"பூட்டான்","capital":"Thimphu","capitalTa":"திம்பு","lang":"Dzongkha","langTa":"ஜோங்கா","fact":"Bhutan is a small Himalayan kingdom that measures Gross National Happiness.","factTa":"பூட்டான் இமயமலையில் உள்ள சிறிய இராச்சியம். இங்கு மகிழ்ச்சியையும் அளவிடுவார்கள்.","quiz":true},{"id":68,"iso2":"BO","continent":"sa","name":"Bolivia","nameTa":"பொலிவியா","capital":"Sucre","capitalTa":"சுக்ரே","lang":"Spanish","langTa":"ஸ்பானிஷ்","fact":"The capital of Bolivia is Sucre.","factTa":"பொலிவியா நாட்டின் தலைநகர் சுக்ரே.","quiz":false},{"id":70,"iso2":"BA","continent":"europe","name":"Bosnia and Herzegovina","nameTa":"போஸ்னியா மற்றும் ஹெர்செகோவினா","capital":"Sarajevo","capitalTa":"சராயேவோ","lang":"Bosnian","langTa":"போஸ்னியன்","fact":"The capital of Bosnia and Herzegovina is Sarajevo.","factTa":"போஸ்னியா மற்றும் ஹெர்செகோவினா நாட்டின் தலைநகர் சராயேவோ.","quiz":false},{"id":72,"iso2":"BW","continent":"africa","name":"Botswana","nameTa":"போட்ஸ்வானா","capital":"Gaborone","capitalTa":"காபரோன்","lang":"English, Tswana","langTa":"ஆங்கிலம், சுவானா","fact":"The capital of Botswana is Gaborone.","factTa":"போட்ஸ்வானா நாட்டின் தலைநகர் காபரோன்.","quiz":false},{"id":76,"iso2":"BR","continent":"sa","name":"Brazil","nameTa":"பிரேசில்","capital":"Brasilia","capitalTa":"பிரசிலியா","lang":"Portuguese","langTa":"போர்த்துகீசியம்","fact":"Brazil holds most of the Amazon rainforest. Football is a favourite game here.","factTa":"அமேசான் காட்டின் பெரும்பகுதி பிரேசிலில் உள்ளது. கால்பந்து இங்கு மிகப் பிடித்த விளையாட்டு.","quiz":true},{"id":84,"iso2":"BZ","continent":"na","name":"Belize","nameTa":"பெலிஸ்","capital":"Belmopan","capitalTa":"பெல்மோபான்","lang":"English","langTa":"ஆங்கிலம்","fact":"The capital of Belize is Belmopan.","factTa":"பெலிஸ் நாட்டின் தலைநகர் பெல்மோபான்.","quiz":false},{"id":90,"iso2":"SB","continent":"oceania","name":"Solomon Islands","nameTa":"சாலமன் தீவுகள்","capital":"Honiara","capitalTa":"ஹோனியாரா","lang":"English","langTa":"ஆங்கிலம்","fact":"The capital of Solomon Islands is Honiara.","factTa":"சாலமன் தீவுகள் நாட்டின் தலைநகர் ஹோனியாரா.","quiz":false},{"id":96,"iso2":"BN","continent":"asia","name":"Brunei","nameTa":"புருனே","capital":"Bandar Seri Begawan","capitalTa":"பண்டார் செரி பெகவான்","lang":"Malay","langTa":"மலாய்","fact":"The capital of Brunei is Bandar Seri Begawan.","factTa":"புருனே நாட்டின் தலைநகர் பண்டார் செரி பெகவான்.","quiz":false},{"id":100,"iso2":"BG","continent":"europe","name":"Bulgaria","nameTa":"பல்கேரியா","capital":"Sofia","capitalTa":"சோபியா","lang":"Bulgarian","langTa":"பல்கேரியன்","fact":"The capital of Bulgaria is Sofia.","factTa":"பல்கேரியா நாட்டின் தலைநகர் சோபியா.","quiz":false},{"id":104,"iso2":"MM","continent":"asia","name":"Myanmar","nameTa":"மியான்மர்","capital":"Naypyidaw","capitalTa":"நேபிடா","lang":"Burmese","langTa":"பர்மியம்","fact":"Myanmar is India's neighbour to the east. It is known for golden pagodas and the Irrawaddy River.","factTa":"மியான்மர் இந்தியாவின் கிழக்கு அயல்நாடு. பொன் கோயில்களுக்கும் இராவதி ஆற்றுக்கும் பெயர் பெற்றது.","quiz":true},{"id":108,"iso2":"BI","continent":"africa","name":"Burundi","nameTa":"புருண்டி","capital":"Gitega","capitalTa":"கிடேகா","lang":"Kirundi","langTa":"கிருந்தி","fact":"The capital of Burundi is Gitega.","factTa":"புருண்டி நாட்டின் தலைநகர் கிடேகா.","quiz":false},{"id":112,"iso2":"BY","continent":"europe","name":"Belarus","nameTa":"பெலாரஸ்","capital":"Minsk","capitalTa":"மின்ஸ்க்","lang":"Belarusian, Russian","langTa":"பெலாருசியன், ரஷ்யன்","fact":"The capital of Belarus is Minsk.","factTa":"பெலாரஸ் நாட்டின் தலைநகர் மின்ஸ்க்.","quiz":false},{"id":116,"iso2":"KH","continent":"asia","name":"Cambodia","nameTa":"கம்போடியா","capital":"Phnom Penh","capitalTa":"ஃப்னோம் பென்","lang":"Khmer","langTa":"கெமர்","fact":"The capital of Cambodia is Phnom Penh.","factTa":"கம்போடியா நாட்டின் தலைநகர் ஃப்னோம் பென்.","quiz":false},{"id":120,"iso2":"CM","continent":"africa","name":"Cameroon","nameTa":"கேமரூன்","capital":"Yaounde","capitalTa":"யாவுண்டே","lang":"French, English","langTa":"பிரெஞ்சு, ஆங்கிலம்","fact":"The capital of Cameroon is Yaounde.","factTa":"கேமரூன் நாட்டின் தலைநகர் யாவுண்டே.","quiz":false},{"id":124,"iso2":"CA","continent":"na","name":"Canada","nameTa":"கனடா","capital":"Ottawa","capitalTa":"ஒட்டாவா","lang":"English, French","langTa":"ஆங்கிலம், பிரெஞ்சு","fact":"Canada is the second-largest country on Earth. It has deep forests, lakes, and long winters.","factTa":"கனடா உலகின் இரண்டாவது பெரிய நாடு. காடுகளும் ஏரிகளும் நீண்ட குளிர்காலமும் உண்டு.","quiz":true},{"id":140,"iso2":"CF","continent":"africa","name":"Central African Republic","nameTa":"மத்திய ஆப்பிரிக்கக் குடியரசு","capital":"Bangui","capitalTa":"பாங்குய்","lang":"French","langTa":"பிரெஞ்சு","fact":"The capital of Central African Republic is Bangui.","factTa":"மத்திய ஆப்பிரிக்கக் குடியரசு நாட்டின் தலைநகர் பாங்குய்.","quiz":false},{"id":144,"iso2":"LK","continent":"asia","name":"Sri Lanka","nameTa":"இலங்கை","capital":"Sri Jayawardenepura Kotte","capitalTa":"ஸ்ரீ ஜெயவர்த்தனபுர கோட்டை","lang":"Sinhala, Tamil","langTa":"சிங்களம், தமிழ்","fact":"Sri Lanka is a teardrop island. Tamil and Sinhala are both official languages.","factTa":"இலங்கை கண்ணீர் வடிவத் தீவு. தமிழும் சிங்களமும் அதிகார மொழிகள்.","quiz":true},{"id":148,"iso2":"TD","continent":"africa","name":"Chad","nameTa":"சாட்","capital":"N'Djamena","capitalTa":"என்ஜமேனா","lang":"French, Arabic","langTa":"பிரெஞ்சு, அரபு","fact":"The capital of Chad is N'Djamena.","factTa":"சாட் நாட்டின் தலைநகர் என்ஜமேனா.","quiz":false},{"id":152,"iso2":"CL","continent":"sa","name":"Chile","nameTa":"சிலி","capital":"Santiago","capitalTa":"சாண்டியாகோ","lang":"Spanish","langTa":"ஸ்பானிஷ்","fact":"Chile is a long thin country between the Pacific Ocean and the Andes. The Atacama is one of the driest deserts.","factTa":"சிலி பசிபிக் கடலுக்கும் ஆண்டிஸ் மலைக்கும் இடையே நீளமான நாடு. அடகாமா மிக வறண்ட பாலைவனம்.","quiz":true},{"id":156,"iso2":"CN","continent":"asia","name":"China","nameTa":"சீனா","capital":"Beijing","capitalTa":"பீஜிங்","lang":"Mandarin","langTa":"சீனம்","fact":"China is a vast East Asian country. The Great Wall was built to protect its old kingdoms.","factTa":"சீனா கிழக்கு ஆசியாவின் பெரிய நாடு. பெருஞ்சுவர் பழைய அரசுகளை காக்கக் கட்டப்பட்டது.","quiz":true},{"id":158,"iso2":"TW","continent":"asia","name":"Taiwan","nameTa":"தைவான்","capital":"Taipei","capitalTa":"தைப்பே","lang":"Mandarin","langTa":"சீனம்","fact":"The capital of Taiwan is Taipei.","factTa":"தைவான் நாட்டின் தலைநகர் தைப்பே.","quiz":false},{"id":170,"iso2":"CO","continent":"sa","name":"Colombia","nameTa":"கொலம்பியா","capital":"Bogota","capitalTa":"பொகோடா","lang":"Spanish","langTa":"ஸ்பானிஷ்","fact":"The capital of Colombia is Bogota.","factTa":"கொலம்பியா நாட்டின் தலைநகர் பொகோடா.","quiz":false},{"id":178,"iso2":"CG","continent":"africa","name":"Congo","nameTa":"காங்கோ","capital":"Brazzaville","capitalTa":"பிராசாவில்","lang":"French","langTa":"பிரெஞ்சு","fact":"The capital of Congo is Brazzaville.","factTa":"காங்கோ நாட்டின் தலைநகர் பிராசாவில்.","quiz":false},{"id":180,"iso2":"CD","continent":"africa","name":"DR Congo","nameTa":"காங்கோ மக்களாட்சிக் குடியரசு","capital":"Kinshasa","capitalTa":"கின்ஷாசா","lang":"French","langTa":"பிரெஞ்சு","fact":"The capital of DR Congo is Kinshasa.","factTa":"காங்கோ மக்களாட்சிக் குடியரசு நாட்டின் தலைநகர் கின்ஷாசா.","quiz":false},{"id":188,"iso2":"CR","continent":"na","name":"Costa Rica","nameTa":"கோஸ்டா ரிகா","capital":"San Jose","capitalTa":"சான் ஜோஸ்","lang":"Spanish","langTa":"ஸ்பானிஷ்","fact":"The capital of Costa Rica is San Jose.","factTa":"கோஸ்டா ரிகா நாட்டின் தலைநகர் சான் ஜோஸ்.","quiz":false},{"id":191,"iso2":"HR","continent":"europe","name":"Croatia","nameTa":"குரோவேசியா","capital":"Zagreb","capitalTa":"ஜாக்ரெப்","lang":"Croatian","langTa":"குரோவேசியன்","fact":"The capital of Croatia is Zagreb.","factTa":"குரோவேசியா நாட்டின் தலைநகர் ஜாக்ரெப்.","quiz":false},{"id":192,"iso2":"CU","continent":"na","name":"Cuba","nameTa":"கியூபா","capital":"Havana","capitalTa":"ஹவானா","lang":"Spanish","langTa":"ஸ்பானிஷ்","fact":"The capital of Cuba is Havana.","factTa":"கியூபா நாட்டின் தலைநகர் ஹவானா.","quiz":false},{"id":196,"iso2":"CY","continent":"europe","name":"Cyprus","nameTa":"சைப்ரஸ்","capital":"Nicosia","capitalTa":"நிக்கோசியா","lang":"Greek, Turkish","langTa":"கிரேக்கம், துருக்கியம்","fact":"The capital of Cyprus is Nicosia.","factTa":"சைப்ரஸ் நாட்டின் தலைநகர் நிக்கோசியா.","quiz":false},{"id":203,"iso2":"CZ","continent":"europe","name":"Czechia","nameTa":"செக்யா","capital":"Prague","capitalTa":"ப்ராக்","lang":"Czech","langTa":"செக்","fact":"The capital of Czechia is Prague.","factTa":"செக்யா நாட்டின் தலைநகர் ப்ராக்.","quiz":false},{"id":204,"iso2":"BJ","continent":"africa","name":"Benin","nameTa":"பெனின்","capital":"Porto-Novo","capitalTa":"போர்ட்டோ நோவோ","lang":"French","langTa":"பிரெஞ்சு","fact":"The capital of Benin is Porto-Novo.","factTa":"பெனின் நாட்டின் தலைநகர் போர்ட்டோ நோவோ.","quiz":false},{"id":208,"iso2":"DK","continent":"europe","name":"Denmark","nameTa":"டென்மார்க்","capital":"Copenhagen","capitalTa":"கோபன்ஹேகன்","lang":"Danish","langTa":"டேனிஷ்","fact":"The capital of Denmark is Copenhagen.","factTa":"டென்மார்க் நாட்டின் தலைநகர் கோபன்ஹேகன்.","quiz":false},{"id":214,"iso2":"DO","continent":"na","name":"Dominican Republic","nameTa":"டொமினிக்கன் குடியரசு","capital":"Santo Domingo","capitalTa":"சாண்டோ டொமிங்கோ","lang":"Spanish","langTa":"ஸ்பானிஷ்","fact":"The capital of Dominican Republic is Santo Domingo.","factTa":"டொமினிக்கன் குடியரசு நாட்டின் தலைநகர் சாண்டோ டொமிங்கோ.","quiz":false},{"id":218,"iso2":"EC","continent":"sa","name":"Ecuador","nameTa":"எக்குவடோர்","capital":"Quito","capitalTa":"கிட்டோ","lang":"Spanish","langTa":"ஸ்பானிஷ்","fact":"The capital of Ecuador is Quito.","factTa":"எக்குவடோர் நாட்டின் தலைநகர் கிட்டோ.","quiz":false},{"id":222,"iso2":"SV","continent":"na","name":"El Salvador","nameTa":"எல் சால்வடார்","capital":"San Salvador","capitalTa":"சான் சால்வடார்","lang":"Spanish","langTa":"ஸ்பானிஷ்","fact":"The capital of El Salvador is San Salvador.","factTa":"எல் சால்வடார் நாட்டின் தலைநகர் சான் சால்வடார்.","quiz":false},{"id":226,"iso2":"GQ","continent":"africa","name":"Equatorial Guinea","nameTa":"ஈக்குவடோரியல் கினி","capital":"Malabo","capitalTa":"மலாபோ","lang":"Spanish","langTa":"ஸ்பானிஷ்","fact":"The capital of Equatorial Guinea is Malabo.","factTa":"ஈக்குவடோரியல் கினி நாட்டின் தலைநகர் மலாபோ.","quiz":false},{"id":231,"iso2":"ET","continent":"africa","name":"Ethiopia","nameTa":"எத்தியோப்பியா","capital":"Addis Ababa","capitalTa":"அடிஸ் அபாபா","lang":"Amharic","langTa":"அம்ஹாரிக்","fact":"Ethiopia is a highland country. Coffee plants were first grown here long ago.","factTa":"எத்தியோப்பியா மலைநாடு. காப்பிச் செடி இங்குதான் முதலில் வளர்ந்ததாகச் சொல்வர்.","quiz":true},{"id":232,"iso2":"ER","continent":"africa","name":"Eritrea","nameTa":"எரித்திரியா","capital":"Asmara","capitalTa":"அஸ்மாரா","lang":"Tigrinya","langTa":"திக்ரின்யா","fact":"The capital of Eritrea is Asmara.","factTa":"எரித்திரியா நாட்டின் தலைநகர் அஸ்மாரா.","quiz":false},{"id":233,"iso2":"EE","continent":"europe","name":"Estonia","nameTa":"எஸ்டோனியா","capital":"Tallinn","capitalTa":"டாலின்","lang":"Estonian","langTa":"எஸ்டோனியன்","fact":"The capital of Estonia is Tallinn.","factTa":"எஸ்டோனியா நாட்டின் தலைநகர் டாலின்.","quiz":false},{"id":238,"iso2":"FK","continent":"sa","name":"Falkland Islands","nameTa":"பாக்லாந்து தீவுகள்","capital":"Stanley","capitalTa":"ஸ்டான்லி","lang":"English","langTa":"ஆங்கிலம்","fact":"The capital of Falkland Islands is Stanley.","factTa":"பாக்லாந்து தீவுகள் நாட்டின் தலைநகர் ஸ்டான்லி.","quiz":false},{"id":242,"iso2":"FJ","continent":"oceania","name":"Fiji","nameTa":"ஃபிஜி","capital":"Suva","capitalTa":"சுவா","lang":"English, Fijian","langTa":"ஆங்கிலம், ஃபிஜியன்","fact":"The capital of Fiji is Suva.","factTa":"ஃபிஜி நாட்டின் தலைநகர் சுவா.","quiz":false},{"id":246,"iso2":"FI","continent":"europe","name":"Finland","nameTa":"பின்லாந்து","capital":"Helsinki","capitalTa":"ஹெல்சின்கி","lang":"Finnish","langTa":"பின்னிஷ்","fact":"The capital of Finland is Helsinki.","factTa":"பின்லாந்து நாட்டின் தலைநகர் ஹெல்சின்கி.","quiz":false},{"id":250,"iso2":"FR","continent":"europe","name":"France","nameTa":"பிரான்ஸ்","capital":"Paris","capitalTa":"பாரிஸ்","lang":"French","langTa":"பிரெஞ்சு","fact":"France is known for the Eiffel Tower in Paris, crusty bread, and the Alps.","factTa":"பிரான்ஸ் பாரிஸின் ஈபில் கோபுரத்திற்கும் ரொட்டிக்கும் ஆல்ப்ஸ் மலைக்கும் பெயர் பெற்றது.","quiz":true},{"id":260,"iso2":"TF","continent":"antarctica","name":"French Southern Lands","nameTa":"பிரெஞ்சு தென் நிலங்கள்","capital":"Port-aux-Francais","capitalTa":"போர்ட்-ஓ-ஃபிரான்சை","lang":"French","langTa":"பிரெஞ்சு","fact":"The capital of French Southern Lands is Port-aux-Francais.","factTa":"பிரெஞ்சு தென் நிலங்கள் நாட்டின் தலைநகர் போர்ட்-ஓ-ஃபிரான்சை.","quiz":false},{"id":262,"iso2":"DJ","continent":"africa","name":"Djibouti","nameTa":"ஜிபூட்டி","capital":"Djibouti","capitalTa":"ஜிபூட்டி","lang":"French, Arabic","langTa":"பிரெஞ்சு, அரபு","fact":"The capital of Djibouti is Djibouti.","factTa":"ஜிபூட்டி நாட்டின் தலைநகர் ஜிபூட்டி.","quiz":false},{"id":266,"iso2":"GA","continent":"africa","name":"Gabon","nameTa":"காபோன்","capital":"Libreville","capitalTa":"லிப்ரேவில்","lang":"French","langTa":"பிரெஞ்சு","fact":"The capital of Gabon is Libreville.","factTa":"காபோன் நாட்டின் தலைநகர் லிப்ரேவில்.","quiz":false},{"id":268,"iso2":"GE","continent":"asia","name":"Georgia","nameTa":"ஜார்ஜியா","capital":"Tbilisi","capitalTa":"திபிலிசி","lang":"Georgian","langTa":"ஜார்ஜியன்","fact":"The capital of Georgia is Tbilisi.","factTa":"ஜார்ஜியா நாட்டின் தலைநகர் த்பிலிசி.","quiz":false},{"id":270,"iso2":"GM","continent":"africa","name":"Gambia","nameTa":"காம்பியா","capital":"Banjul","capitalTa":"பஞ்ஜூல்","lang":"English","langTa":"ஆங்கிலம்","fact":"The capital of Gambia is Banjul.","factTa":"காம்பியா நாட்டின் தலைநகர் பஞ்ஜூல்.","quiz":false},{"id":275,"iso2":"PS","continent":"asia","name":"Palestine","nameTa":"பாலஸ்தீனம்","capital":"Ramallah","capitalTa":"ராமல்லா","lang":"Arabic","langTa":"அரபு","fact":"The capital of Palestine is Ramallah.","factTa":"பாலஸ்தீனம் நாட்டின் தலைநகர் ராமல்லா.","quiz":false},{"id":276,"iso2":"DE","continent":"europe","name":"Germany","nameTa":"ஜெர்மனி","capital":"Berlin","capitalTa":"பெர்லின்","lang":"German","langTa":"ஜெர்மன்","fact":"Germany sits in the heart of Europe. It is known for forests, rivers, and famous inventors.","factTa":"ஜெர்மனி ஐரோப்பாவின் நடுவே உள்ளது. காடுகள், ஆறுகள், புகழ்பெற்ற கண்டுபிடிப்பாளர்கள்.","quiz":true},{"id":288,"iso2":"GH","continent":"africa","name":"Ghana","nameTa":"கானா","capital":"Accra","capitalTa":"அக்ரா","lang":"English","langTa":"ஆங்கிலம்","fact":"The capital of Ghana is Accra.","factTa":"கானா நாட்டின் தலைநகர் அக்ரா.","quiz":false},{"id":300,"iso2":"GR","continent":"europe","name":"Greece","nameTa":"கிரீஸ்","capital":"Athens","capitalTa":"ஏதென்ஸ்","lang":"Greek","langTa":"கிரேக்கம்","fact":"Greece is the land of ancient Olympics and marble temples. Athens is named after the goddess Athena.","factTa":"கிரீஸ் பழைய ஒலிம்பிக் விளையாட்டுகளின் நாடு. ஏதென்ஸ் தெய்வம் அதீனாவின் பெயர்.","quiz":true},{"id":304,"iso2":"GL","continent":"na","name":"Greenland","nameTa":"கிரீன்லாந்து","capital":"Nuuk","capitalTa":"நூக்","lang":"Greenlandic","langTa":"கிரீன்லாந்தியம்","fact":"The capital of Greenland is Nuuk.","factTa":"கிரீன்லாந்து நாட்டின் தலைநகர் நூக்.","quiz":false},{"id":320,"iso2":"GT","continent":"na","name":"Guatemala","nameTa":"குவாத்தமாலா","capital":"Guatemala City","capitalTa":"குவாத்தமாலா நகரம்","lang":"Spanish","langTa":"ஸ்பானிஷ்","fact":"The capital of Guatemala is Guatemala City.","factTa":"குவாத்தமாலா நாட்டின் தலைநகர் குவாத்தமாலா நகரம்.","quiz":false},{"id":324,"iso2":"GN","continent":"africa","name":"Guinea","nameTa":"கினி","capital":"Conakry","capitalTa":"கோனாக்ரி","lang":"French","langTa":"பிரெஞ்சு","fact":"The capital of Guinea is Conakry.","factTa":"கினி நாட்டின் தலைநகர் கோனாக்ரி.","quiz":false},{"id":328,"iso2":"GY","continent":"sa","name":"Guyana","nameTa":"கயானா","capital":"Georgetown","capitalTa":"ஜார்ஜ்டவுன்","lang":"English","langTa":"ஆங்கிலம்","fact":"The capital of Guyana is Georgetown.","factTa":"கயானா நாட்டின் தலைநகர் ஜார்ஜ்டவுன்.","quiz":false},{"id":332,"iso2":"HT","continent":"na","name":"Haiti","nameTa":"ஹைட்டி","capital":"Port-au-Prince","capitalTa":"போர்ட்-ஓ-பிரின்ஸ்","lang":"French, Haitian Creole","langTa":"பிரெஞ்சு","fact":"The capital of Haiti is Port-au-Prince.","factTa":"ஹைட்டி நாட்டின் தலைநகர் போர்ட்-ஓ-பிரின்ஸ்.","quiz":false},{"id":340,"iso2":"HN","continent":"na","name":"Honduras","nameTa":"ஹோண்டுராஸ்","capital":"Tegucigalpa","capitalTa":"தெகுசிகல்பா","lang":"Spanish","langTa":"ஸ்பானிஷ்","fact":"The capital of Honduras is Tegucigalpa.","factTa":"ஹோண்டுராஸ் நாட்டின் தலைநகர் தெகுசிகல்பா.","quiz":false},{"id":348,"iso2":"HU","continent":"europe","name":"Hungary","nameTa":"ஹங்கேரி","capital":"Budapest","capitalTa":"புடாபெஸ்ட்","lang":"Hungarian","langTa":"ஹங்கேரியன்","fact":"The capital of Hungary is Budapest.","factTa":"ஹங்கேரி நாட்டின் தலைநகர் புடாபெஸ்ட்.","quiz":false},{"id":352,"iso2":"IS","continent":"europe","name":"Iceland","nameTa":"ஐஸ்லாந்து","capital":"Reykjavik","capitalTa":"ரேக்யவிக்","lang":"Icelandic","langTa":"ஐஸ்லாந்தியம்","fact":"The capital of Iceland is Reykjavik.","factTa":"ஐஸ்லாந்து நாட்டின் தலைநகர் ரேக்யவிக்.","quiz":false},{"id":356,"iso2":"IN","continent":"asia","name":"India","nameTa":"இந்தியா","capital":"New Delhi","capitalTa":"புது தில்லி","lang":"Hindi, English","langTa":"இந்தி, ஆங்கிலம்","fact":"India is home to tigers, elephants, and the Himalayas — the world's highest mountains.","factTa":"இந்தியாவில் புலிகள், யானைகள், உலகின் உயரமான இமயமலை உள்ளன.","quiz":true},{"id":360,"iso2":"ID","continent":"asia","name":"Indonesia","nameTa":"இந்தோனேசியா","capital":"Jakarta","capitalTa":"ஜகார்த்தா","lang":"Indonesian","langTa":"இந்தோனேசியம்","fact":"Indonesia is made of thousands of islands. Komodo dragons live on a few of them.","factTa":"இந்தோனேசியா ஆயிரக்கணக்கான தீவுகள். சில தீவுகளில் கொமோடோ டிராகன் வாழ்கிறது.","quiz":true},{"id":364,"iso2":"IR","continent":"asia","name":"Iran","nameTa":"ஈரான்","capital":"Tehran","capitalTa":"தேஹ்ரான்","lang":"Persian","langTa":"பாரசீகம்","fact":"Iran is an old land once called Persia. Tehran sits below snowy mountains.","factTa":"ஈரான் பழைய பாரசீக நாடு. தேஹ்ரான் பனி மலைகளின் அடியில் உள்ளது.","quiz":true},{"id":368,"iso2":"IQ","continent":"asia","name":"Iraq","nameTa":"ஈராக்","capital":"Baghdad","capitalTa":"பாக்தாத்","lang":"Arabic, Kurdish","langTa":"அரபு","fact":"The capital of Iraq is Baghdad.","factTa":"ஈராக் நாட்டின் தலைநகர் பாக்தாத்.","quiz":false},{"id":372,"iso2":"IE","continent":"europe","name":"Ireland","nameTa":"அயர்லாந்து","capital":"Dublin","capitalTa":"டப்ளின்","lang":"English, Irish","langTa":"ஆங்கிலம், ஐரிஷ்","fact":"The capital of Ireland is Dublin.","factTa":"அயர்லாந்து நாட்டின் தலைநகர் டப்ளின்.","quiz":true},{"id":376,"iso2":"IL","continent":"asia","name":"Israel","nameTa":"இஸ்ரேல்","capital":"Jerusalem","capitalTa":"ஜெரூசலம்","lang":"Hebrew, Arabic","langTa":"ஹீப்ரு, அரபு","fact":"The capital of Israel is Jerusalem.","factTa":"இஸ்ரேல் நாட்டின் தலைநகர் ஜெரூசலம்.","quiz":false},{"id":380,"iso2":"IT","continent":"europe","name":"Italy","nameTa":"இத்தாலி","capital":"Rome","capitalTa":"ரோம்","lang":"Italian","langTa":"இத்தாலியம்","fact":"Italy looks like a boot in the sea. Rome has the Colosseum, a giant stadium from long ago.","factTa":"இத்தாலி கடலில் ஒரு காலணி போல் தெரியும். ரோமில் பழங்கால கொலோசியம் அரங்கம் உள்ளது.","quiz":true},{"id":384,"iso2":"CI","continent":"africa","name":"Ivory Coast","nameTa":"ஐவரி கோஸ்ட்","capital":"Yamoussoukro","capitalTa":"யாமுசுகுரோ","lang":"French","langTa":"பிரெஞ்சு","fact":"The capital of Ivory Coast is Yamoussoukro.","factTa":"ஐவரி கோஸ்ட் நாட்டின் தலைநகர் யாமுசுகுரோ.","quiz":false},{"id":388,"iso2":"JM","continent":"na","name":"Jamaica","nameTa":"ஜமைக்கா","capital":"Kingston","capitalTa":"கிங்ஸ்டன்","lang":"English","langTa":"ஆங்கிலம்","fact":"The capital of Jamaica is Kingston.","factTa":"ஜமைக்கா நாட்டின் தலைநகர் கிங்ஸ்டன்.","quiz":false},{"id":392,"iso2":"JP","continent":"asia","name":"Japan","nameTa":"ஜப்பான்","capital":"Tokyo","capitalTa":"டோக்கியோ","lang":"Japanese","langTa":"ஜப்பானியம்","fact":"Japan is an island nation of bullet trains, cherry blossoms, and many volcanoes.","factTa":"ஜப்பான் தீவுநாடு. வேகத் தொடர்வண்டிகள், செர்ரி பூக்கள், எரிமலைகள் நிறைந்தது.","quiz":true},{"id":398,"iso2":"KZ","continent":"asia","name":"Kazakhstan","nameTa":"கசகஸ்தான்","capital":"Astana","capitalTa":"அஸ்தானா","lang":"Kazakh, Russian","langTa":"கசாக், ரஷ்யன்","fact":"The capital of Kazakhstan is Astana.","factTa":"கசகஸ்தான் நாட்டின் தலைநகர் அஸ்தானா.","quiz":false},{"id":400,"iso2":"JO","continent":"asia","name":"Jordan","nameTa":"ஜோர்டான்","capital":"Amman","capitalTa":"அம்மான்","lang":"Arabic","langTa":"அரபு","fact":"The capital of Jordan is Amman.","factTa":"ஜோர்டான் நாட்டின் தலைநகர் அம்மான்.","quiz":false},{"id":404,"iso2":"KE","continent":"africa","name":"Kenya","nameTa":"கென்யா","capital":"Nairobi","capitalTa":"நைரோபி","lang":"Swahili, English","langTa":"சுவாஹிலி, ஆங்கிலம்","fact":"Kenya is famous for safari parks where elephants, lions, and giraffes roam the grasslands.","factTa":"கென்யா சஃபாரி பூங்காக்களுக்குப் பெயர். யானை, சிங்கம், ஒட்டகச்சிவிங்கி புல்வெளியில் வாழும்.","quiz":true},{"id":408,"iso2":"KP","continent":"asia","name":"North Korea","nameTa":"வட கொரியா","capital":"Pyongyang","capitalTa":"பியோங்யாங்","lang":"Korean","langTa":"கொரியன்","fact":"The capital of North Korea is Pyongyang.","factTa":"வட கொரியா நாட்டின் தலைநகர் பியோங்யாங்.","quiz":false},{"id":410,"iso2":"KR","continent":"asia","name":"South Korea","nameTa":"தென் கொரியா","capital":"Seoul","capitalTa":"சியோல்","lang":"Korean","langTa":"கொரியன்","fact":"South Korea is known for high-speed internet, kimchi, and the busy city of Seoul.","factTa":"தென் கொரியா வேக இணையத்திற்கும் கிம்சி உணவிற்கும் சியோல் நகருக்கும் பெயர் பெற்றது.","quiz":true},{"id":414,"iso2":"KW","continent":"asia","name":"Kuwait","nameTa":"குவைத்","capital":"Kuwait City","capitalTa":"குவைத் நகரம்","lang":"Arabic","langTa":"அரபு","fact":"The capital of Kuwait is Kuwait City.","factTa":"குவைத் நாட்டின் தலைநகர் குவைத் நகரம்.","quiz":false},{"id":417,"iso2":"KG","continent":"asia","name":"Kyrgyzstan","nameTa":"கிர்கிஸ்தான்","capital":"Bishkek","capitalTa":"பிஷ்கெக்","lang":"Kyrgyz","langTa":"கிர்கிஸ்","fact":"The capital of Kyrgyzstan is Bishkek.","factTa":"கிர்கிஸ்தான் நாட்டின் தலைநகர் பிஷ்கெக்.","quiz":false},{"id":418,"iso2":"LA","continent":"asia","name":"Laos","nameTa":"லாவோஸ்","capital":"Vientiane","capitalTa":"வியன்டியான்","lang":"Lao","langTa":"லாவோ","fact":"The capital of Laos is Vientiane.","factTa":"லாவோஸ் நாட்டின் தலைநகர் வியன்டியான்.","quiz":false},{"id":422,"iso2":"LB","continent":"asia","name":"Lebanon","nameTa":"லெபனான்","capital":"Beirut","capitalTa":"பெய்ரூட்","lang":"Arabic","langTa":"அரபு","fact":"The capital of Lebanon is Beirut.","factTa":"லெபனான் நாட்டின் தலைநகர் பெய்ரூட்.","quiz":false},{"id":426,"iso2":"LS","continent":"africa","name":"Lesotho","nameTa":"லெசோதோ","capital":"Maseru","capitalTa":"மசேரு","lang":"English, Sesotho","langTa":"ஆங்கிலம்","fact":"The capital of Lesotho is Maseru.","factTa":"லெசோதோ நாட்டின் தலைநகர் மசேரு.","quiz":false},{"id":428,"iso2":"LV","continent":"europe","name":"Latvia","nameTa":"லாட்வியா","capital":"Riga","capitalTa":"ரிகா","lang":"Latvian","langTa":"லாட்வியன்","fact":"The capital of Latvia is Riga.","factTa":"லாட்வியா நாட்டின் தலைநகர் ரிகா.","quiz":false},{"id":430,"iso2":"LR","continent":"africa","name":"Liberia","nameTa":"லைபீரியா","capital":"Monrovia","capitalTa":"மன்ரோவியா","lang":"English","langTa":"ஆங்கிலம்","fact":"The capital of Liberia is Monrovia.","factTa":"லைபீரியா நாட்டின் தலைநகர் மன்ரோவியா.","quiz":false},{"id":434,"iso2":"LY","continent":"africa","name":"Libya","nameTa":"லிபியா","capital":"Tripoli","capitalTa":"திரிப்போலி","lang":"Arabic","langTa":"அரபு","fact":"The capital of Libya is Tripoli.","factTa":"லிபியா நாட்டின் தலைநகர் திரிப்போலி.","quiz":false},{"id":440,"iso2":"LT","continent":"europe","name":"Lithuania","nameTa":"லிதுவேனியா","capital":"Vilnius","capitalTa":"வில்னியஸ்","lang":"Lithuanian","langTa":"லிதுவேனியன்","fact":"The capital of Lithuania is Vilnius.","factTa":"லிதுவேனியா நாட்டின் தலைநகர் வில்னியஸ்.","quiz":false},{"id":442,"iso2":"LU","continent":"europe","name":"Luxembourg","nameTa":"லக்சம்பர்க்","capital":"Luxembourg","capitalTa":"லக்சம்பர்க்","lang":"Luxembourgish","langTa":"லக்சம்பர்கிஷ்","fact":"The capital of Luxembourg is Luxembourg.","factTa":"லக்சம்பர்க் நாட்டின் தலைநகர் லக்சம்பர்க்.","quiz":false},{"id":450,"iso2":"MG","continent":"africa","name":"Madagascar","nameTa":"மடகாஸ்கர்","capital":"Antananarivo","capitalTa":"அன்டனானரிவோ","lang":"Malagasy, French","langTa":"மலகாசி, பிரெஞ்சு","fact":"Madagascar is a huge island. Lemurs live here and almost nowhere else on Earth.","factTa":"மடகாஸ்கர் பெரிய தீவு. லெமூர் குரங்குகள் இங்கு மட்டுமே பெரும்பாலும் வாழ்கின்றன.","quiz":true},{"id":454,"iso2":"MW","continent":"africa","name":"Malawi","nameTa":"மலாவி","capital":"Lilongwe","capitalTa":"லிலாங்வே","lang":"English, Chichewa","langTa":"ஆங்கிலம்","fact":"The capital of Malawi is Lilongwe.","factTa":"மலாவி நாட்டின் தலைநகர் லிலாங்வே.","quiz":false},{"id":458,"iso2":"MY","continent":"asia","name":"Malaysia","nameTa":"மலேசியா","capital":"Kuala Lumpur","capitalTa":"கோலாலம்பூர்","lang":"Malay","langTa":"மலாய்","fact":"Malaysia is split by the South China Sea. Kuala Lumpur has tall twin towers.","factTa":"மலேசியா தென் சீனக் கடலால் பிரிந்துள்ளது. கோலாலம்பூரில் உயரமான இரட்டைக் கோபுரங்கள்.","quiz":true},{"id":466,"iso2":"ML","continent":"africa","name":"Mali","nameTa":"மாலி","capital":"Bamako","capitalTa":"பமாகோ","lang":"French","langTa":"பிரெஞ்சு","fact":"The capital of Mali is Bamako.","factTa":"மாலி நாட்டின் தலைநகர் பமாகோ.","quiz":false},{"id":478,"iso2":"MR","continent":"africa","name":"Mauritania","nameTa":"மொரித்தானியா","capital":"Nouakchott","capitalTa":"நுவாக்சோட்","lang":"Arabic","langTa":"அரபு","fact":"The capital of Mauritania is Nouakchott.","factTa":"மொரித்தானியா நாட்டின் தலைநகர் நுவாக்சோட்.","quiz":false},{"id":484,"iso2":"MX","continent":"na","name":"Mexico","nameTa":"மெக்சிகோ","capital":"Mexico City","capitalTa":"மெக்சிகோ நகரம்","lang":"Spanish","langTa":"ஸ்பானிஷ்","fact":"Mexico gave the world chocolate, corn, and chilli. Its capital is one of the biggest cities on Earth.","factTa":"மெக்சிகோ சாக்லேட், சோளம், மிளகாய் தந்த நாடு. தலைநகர் உலகின் பெரிய நகரங்களில் ஒன்று.","quiz":true},{"id":496,"iso2":"MN","continent":"asia","name":"Mongolia","nameTa":"மங்கோலியா","capital":"Ulaanbaatar","capitalTa":"உலான்பாட்டர்","lang":"Mongolian","langTa":"மங்கோலியன்","fact":"The capital of Mongolia is Ulaanbaatar.","factTa":"மங்கோலியா நாட்டின் தலைநகர் உலான்பாட்டர்.","quiz":false},{"id":498,"iso2":"MD","continent":"europe","name":"Moldova","nameTa":"மால்டோவா","capital":"Chisinau","capitalTa":"சிசினாவ்","lang":"Romanian","langTa":"ரோமானியம்","fact":"The capital of Moldova is Chisinau.","factTa":"மால்டோவா நாட்டின் தலைநகர் சிசினாவ்.","quiz":false},{"id":499,"iso2":"ME","continent":"europe","name":"Montenegro","nameTa":"மாண்டினீக்ரோ","capital":"Podgorica","capitalTa":"பாட்கோரிட்சா","lang":"Montenegrin","langTa":"மாண்டினீக்ரின்","fact":"The capital of Montenegro is Podgorica.","factTa":"மாண்டினீக்ரோ நாட்டின் தலைநகர் பாட்கோரிட்சா.","quiz":false},{"id":504,"iso2":"MA","continent":"africa","name":"Morocco","nameTa":"மொராக்கோ","capital":"Rabat","capitalTa":"ரபாத்","lang":"Arabic","langTa":"அரபு","fact":"Morocco sits in North Africa by the Atlas Mountains and the Sahara Desert.","factTa":"மொராக்கோ வட ஆப்பிரிக்காவில் ஆட்லஸ் மலைக்கும் சஹாரா பாலைவனத்திற்கும் அருகில் உள்ளது.","quiz":true},{"id":508,"iso2":"MZ","continent":"africa","name":"Mozambique","nameTa":"மொசாம்பிக்","capital":"Maputo","capitalTa":"மபுடோ","lang":"Portuguese","langTa":"போர்த்துகீசியம்","fact":"The capital of Mozambique is Maputo.","factTa":"மொசாம்பிக் நாட்டின் தலைநகர் மபுடோ.","quiz":false},{"id":512,"iso2":"OM","continent":"asia","name":"Oman","nameTa":"ஓமன்","capital":"Muscat","capitalTa":"மஸ்கட்","lang":"Arabic","langTa":"அரபு","fact":"The capital of Oman is Muscat.","factTa":"ஓமன் நாட்டின் தலைநகர் மஸ்கட்.","quiz":false},{"id":516,"iso2":"NA","continent":"africa","name":"Namibia","nameTa":"நமீபியா","capital":"Windhoek","capitalTa":"விண்ட்ஹோக்","lang":"English","langTa":"ஆங்கிலம்","fact":"The capital of Namibia is Windhoek.","factTa":"நமீபியா நாட்டின் தலைநகர் விண்ட்ஹோக்.","quiz":false},{"id":524,"iso2":"NP","continent":"asia","name":"Nepal","nameTa":"நேபாளம்","capital":"Kathmandu","capitalTa":"காத்மாண்டு","lang":"Nepali","langTa":"நேபாளி","fact":"Nepal holds Mount Everest, the highest peak on Earth. Many people here speak Nepali.","factTa":"உலகின் உயரமான சிகரம் எவரெஸ்ட் நேபாளத்தில் உள்ளது.","quiz":true},{"id":528,"iso2":"NL","continent":"europe","name":"Netherlands","nameTa":"நெதர்லாந்து","capital":"Amsterdam","capitalTa":"ஆம்ஸ்டர்டாம்","lang":"Dutch","langTa":"டச்சு","fact":"The Netherlands is a low country of canals, bicycles, and colourful tulip fields.","factTa":"நெதர்லாந்து கால்வாய்கள், மிதிவண்டிகள், டியூலிப் பூந்தோட்டங்கள் நிறைந்த தாழ்நில நாடு.","quiz":true},{"id":540,"iso2":"NC","continent":"oceania","name":"New Caledonia","nameTa":"நியூ கலிடோனியா","capital":"Noumea","capitalTa":"நுமியா","lang":"French","langTa":"பிரெஞ்சு","fact":"The capital of New Caledonia is Noumea.","factTa":"நியூ கலிடோனியா நாட்டின் தலைநகர் நுமியா.","quiz":false},{"id":548,"iso2":"VU","continent":"oceania","name":"Vanuatu","nameTa":"வனுவாட்டு","capital":"Port Vila","capitalTa":"போர்ட் விலா","lang":"Bislama, English, French","langTa":"பிஸ்லாமா","fact":"The capital of Vanuatu is Port Vila.","factTa":"வனுவாட்டு நாட்டின் தலைநகர் போர்ட் விலா.","quiz":false},{"id":554,"iso2":"NZ","continent":"oceania","name":"New Zealand","nameTa":"நியூசிலாந்து","capital":"Wellington","capitalTa":"வெலிங்டன்","lang":"English, Maori","langTa":"ஆங்கிலம், மாவோரி","fact":"New Zealand has two main islands. It is home to kiwi birds and snowy mountains.","factTa":"நியூசிலாந்தில் இரண்டு முதன்மைத் தீவுகள். கீவி பறவைகளும் பனி மலைகளும் உள்ளன.","quiz":true},{"id":558,"iso2":"NI","continent":"na","name":"Nicaragua","nameTa":"நிகரகுவா","capital":"Managua","capitalTa":"மனாகுவா","lang":"Spanish","langTa":"ஸ்பானிஷ்","fact":"The capital of Nicaragua is Managua.","factTa":"நிகரகுவா நாட்டின் தலைநகர் மனாகுவா.","quiz":false},{"id":562,"iso2":"NE","continent":"africa","name":"Niger","nameTa":"நைஜர்","capital":"Niamey","capitalTa":"நியாமே","lang":"French","langTa":"பிரெஞ்சு","fact":"The capital of Niger is Niamey.","factTa":"நைஜர் நாட்டின் தலைநகர் நியாமே.","quiz":false},{"id":566,"iso2":"NG","continent":"africa","name":"Nigeria","nameTa":"நைஜீரியா","capital":"Abuja","capitalTa":"அபுஜா","lang":"English","langTa":"ஆங்கிலம்","fact":"Nigeria has the most people in Africa. Abuja is a planned capital in the centre of the country.","factTa":"நைஜீரியா ஆப்பிரிக்காவில் அதிக மக்கள் கொண்ட நாடு. அபுஜா நடுவில் திட்டமிட்டு அமைக்கப்பட்ட தலைநகர்.","quiz":true},{"id":578,"iso2":"NO","continent":"europe","name":"Norway","nameTa":"நார்வே","capital":"Oslo","capitalTa":"ஓஸ்லோ","lang":"Norwegian","langTa":"நார்வேஜியன்","fact":"Norway has deep sea inlets called fjords. In winter you can see the Northern Lights.","factTa":"நார்வே ஃப்யோர்ட் எனும் ஆழ்கடல் பள்ளத்தாக்குகளுக்குப் பெயர். குளிர்காலத்தில் வடதுருவ ஒளி தெரியும்.","quiz":true},{"id":586,"iso2":"PK","continent":"asia","name":"Pakistan","nameTa":"பாகிஸ்தான்","capital":"Islamabad","capitalTa":"இஸ்லாமாபாத்","lang":"Urdu, English","langTa":"உருது, ஆங்கிலம்","fact":"Pakistan's capital Islamabad sits against the Margalla Hills. The Indus River feeds its farms.","factTa":"பாகிஸ்தானின் தலைநகர் இஸ்லாமாபாத் மலைகளின் அடியில் உள்ளது. சிந்து ஆறு விவசாயத்திற்கு உதவுகிறது.","quiz":true},{"id":591,"iso2":"PA","continent":"na","name":"Panama","nameTa":"பனாமா","capital":"Panama City","capitalTa":"பனாமா நகரம்","lang":"Spanish","langTa":"ஸ்பானிஷ்","fact":"The capital of Panama is Panama City.","factTa":"பனாமா நாட்டின் தலைநகர் பனாமா நகரம்.","quiz":false},{"id":598,"iso2":"PG","continent":"oceania","name":"Papua New Guinea","nameTa":"பப்புவா நியூ கினி","capital":"Port Moresby","capitalTa":"போர்ட் மோர்ஸ்பி","lang":"English","langTa":"ஆங்கிலம்","fact":"The capital of Papua New Guinea is Port Moresby.","factTa":"பப்புவா நியூ கினி நாட்டின் தலைநகர் போர்ட் மோர்ஸ்பி.","quiz":false},{"id":600,"iso2":"PY","continent":"sa","name":"Paraguay","nameTa":"பராகுவே","capital":"Asuncion","capitalTa":"அசுன்சியோன்","lang":"Spanish, Guarani","langTa":"ஸ்பானிஷ்","fact":"The capital of Paraguay is Asuncion.","factTa":"பராகுவே நாட்டின் தலைநகர் அசுன்சியோன்.","quiz":false},{"id":604,"iso2":"PE","continent":"sa","name":"Peru","nameTa":"பெரு","capital":"Lima","capitalTa":"லிமா","lang":"Spanish","langTa":"ஸ்பானிஷ்","fact":"Peru is home to Machu Picchu, a stone city high in the Andes built by the Inca people.","factTa":"பெருவில் ஆண்டிஸ் மலையில் இன்கா மக்கள் கட்டிய மாச்சு பிச்சு கல் நகரம் உள்ளது.","quiz":true},{"id":608,"iso2":"PH","continent":"asia","name":"Philippines","nameTa":"பிலிப்பைன்ஸ்","capital":"Manila","capitalTa":"மணிலா","lang":"Filipino, English","langTa":"பிலிப்பினோ, ஆங்கிலம்","fact":"The Philippines is a country of more than 7,000 islands. People here love music and festivals.","factTa":"பிலிப்பைன்ஸ் 7,000-க்கும் மேல் தீவுகள். இசைக்கும் திருவிழாக்களுக்கும் பெயர் பெற்றது.","quiz":true},{"id":616,"iso2":"PL","continent":"europe","name":"Poland","nameTa":"போலந்து","capital":"Warsaw","capitalTa":"வார்சா","lang":"Polish","langTa":"போலிஷ்","fact":"Poland is a Central European country of forests and historic cities. Warsaw rose again after being rebuilt.","factTa":"போலந்து நடு ஐரோப்பிய நாடு. வார்சா மீண்டும் கட்டப்பட்ட வரலாற்று நகரம்.","quiz":true},{"id":620,"iso2":"PT","continent":"europe","name":"Portugal","nameTa":"போர்ச்சுகல்","capital":"Lisbon","capitalTa":"லிஸ்பன்","lang":"Portuguese","langTa":"போர்த்துகீசியம்","fact":"The capital of Portugal is Lisbon.","factTa":"போர்ச்சுகல் நாட்டின் தலைநகர் லிஸ்பன்.","quiz":false},{"id":624,"iso2":"GW","continent":"africa","name":"Guinea-Bissau","nameTa":"கினி-பிசாவு","capital":"Bissau","capitalTa":"பிசாவு","lang":"Portuguese","langTa":"போர்த்துகீசியம்","fact":"The capital of Guinea-Bissau is Bissau.","factTa":"கினி-பிசாவு நாட்டின் தலைநகர் பிசாவு.","quiz":false},{"id":626,"iso2":"TL","continent":"asia","name":"Timor-Leste","nameTa":"திமோர்-லெஸ்தே","capital":"Dili","capitalTa":"டிலி","lang":"Portuguese, Tetum","langTa":"போர்த்துகீசியம்","fact":"The capital of Timor-Leste is Dili.","factTa":"திமோர்-லெஸ்தே நாட்டின் தலைநகர் டிலி.","quiz":false},{"id":630,"iso2":"PR","continent":"na","name":"Puerto Rico","nameTa":"போர்ட்டோ ரிகோ","capital":"San Juan","capitalTa":"சான் ஜுவான்","lang":"Spanish, English","langTa":"ஸ்பானிஷ், ஆங்கிலம்","fact":"The capital of Puerto Rico is San Juan.","factTa":"போர்ட்டோ ரிகோ நாட்டின் தலைநகர் சான் ஜுவான்.","quiz":false},{"id":634,"iso2":"QA","continent":"asia","name":"Qatar","nameTa":"கத்தார்","capital":"Doha","capitalTa":"தோஹா","lang":"Arabic","langTa":"அரபு","fact":"The capital of Qatar is Doha.","factTa":"கத்தார் நாட்டின் தலைநகர் தோஹா.","quiz":false},{"id":642,"iso2":"RO","continent":"europe","name":"Romania","nameTa":"ருமேனியா","capital":"Bucharest","capitalTa":"புகாரெஸ்ட்","lang":"Romanian","langTa":"ரோமானியம்","fact":"The capital of Romania is Bucharest.","factTa":"ருமேனியா நாட்டின் தலைநகர் புகாரெஸ்ட்.","quiz":false},{"id":643,"iso2":"RU","continent":"europe","name":"Russia","nameTa":"ரஷ்யா","capital":"Moscow","capitalTa":"மாஸ்கோ","lang":"Russian","langTa":"ரஷ்யன்","fact":"Russia is the largest country on Earth, stretching from Europe to the Pacific.","factTa":"ரஷ்யா உலகின் மிகப் பெரிய நாடு. ஐரோப்பா முதல் பசிபிக் கடல் வரை பரவியுள்ளது.","quiz":true},{"id":646,"iso2":"RW","continent":"africa","name":"Rwanda","nameTa":"ருவாண்டா","capital":"Kigali","capitalTa":"கிகாலி","lang":"Kinyarwanda","langTa":"கின்யருவாண்டா","fact":"The capital of Rwanda is Kigali.","factTa":"ருவாண்டா நாட்டின் தலைநகர் கிகாலி.","quiz":false},{"id":682,"iso2":"SA","continent":"asia","name":"Saudi Arabia","nameTa":"சவுதி அரேபியா","capital":"Riyadh","capitalTa":"ரியாத்","lang":"Arabic","langTa":"அரபு","fact":"Saudi Arabia is a large desert country. It holds two of Islam's holiest cities, Makkah and Madinah.","factTa":"சவுதி அரேபியா பெரிய பாலைவன நாடு. இஸ்லாத்தின் புனித நகரங்கள் மக்காவும் மதீனாவும் இங்குள்ளன.","quiz":true},{"id":686,"iso2":"SN","continent":"africa","name":"Senegal","nameTa":"செனகல்","capital":"Dakar","capitalTa":"டாக்கார்","lang":"French","langTa":"பிரெஞ்சு","fact":"The capital of Senegal is Dakar.","factTa":"செனகல் நாட்டின் தலைநகர் டாக்கார்.","quiz":false},{"id":688,"iso2":"RS","continent":"europe","name":"Serbia","nameTa":"செர்பியா","capital":"Belgrade","capitalTa":"பெல்கிரேட்","lang":"Serbian","langTa":"செர்பியன்","fact":"The capital of Serbia is Belgrade.","factTa":"செர்பியா நாட்டின் தலைநகர் பெல்கிரேட்.","quiz":false},{"id":694,"iso2":"SL","continent":"africa","name":"Sierra Leone","nameTa":"சியரா லியோன்","capital":"Freetown","capitalTa":"ஃப்ரீடவுன்","lang":"English","langTa":"ஆங்கிலம்","fact":"The capital of Sierra Leone is Freetown.","factTa":"சியரா லியோன் நாட்டின் தலைநகர் ஃப்ரீடவுன்.","quiz":false},{"id":703,"iso2":"SK","continent":"europe","name":"Slovakia","nameTa":"ஸ்லோவாகியா","capital":"Bratislava","capitalTa":"பிராடிஸ்லாவா","lang":"Slovak","langTa":"ஸ்லோவாக்","fact":"The capital of Slovakia is Bratislava.","factTa":"ஸ்லோவாகியா நாட்டின் தலைநகர் பிராடிஸ்லாவா.","quiz":false},{"id":704,"iso2":"VN","continent":"asia","name":"Vietnam","nameTa":"வியட்நாம்","capital":"Hanoi","capitalTa":"ஹனாய்","lang":"Vietnamese","langTa":"வியட்நாமியம்","fact":"Vietnam is a long S-shaped country in Southeast Asia. Hanoi is its thousand-year-old capital.","factTa":"வியட்நாம் தென்கிழக்கு ஆசியாவில் S வடிவ நாடு. ஹனாய் ஆயிரம் ஆண்டுகள் பழைய தலைநகர்.","quiz":true},{"id":705,"iso2":"SI","continent":"europe","name":"Slovenia","nameTa":"ஸ்லோவேனியா","capital":"Ljubljana","capitalTa":"லியுப்லியானா","lang":"Slovene","langTa":"ஸ்லோவீன்","fact":"The capital of Slovenia is Ljubljana.","factTa":"ஸ்லோவேனியா நாட்டின் தலைநகர் லியுப்லியானா.","quiz":false},{"id":706,"iso2":"SO","continent":"africa","name":"Somalia","nameTa":"சோமாலியா","capital":"Mogadishu","capitalTa":"மொகாடிசு","lang":"Somali, Arabic","langTa":"சோமாலி, அரபு","fact":"The capital of Somalia is Mogadishu.","factTa":"சோமாலியா நாட்டின் தலைநகர் மொகாடிசு.","quiz":false},{"id":710,"iso2":"ZA","continent":"africa","name":"South Africa","nameTa":"தென்னாப்பிரிக்கா","capital":"Pretoria","capitalTa":"பிரிட்டோரியா","lang":"Zulu, English, Afrikaans","langTa":"ஜூலு, ஆங்கிலம்","fact":"South Africa has three capital cities. Pretoria is the administrative one. It is home to lions and elephants.","factTa":"தென்னாப்பிரிக்காவில் மூன்று தலைநகரங்கள். பிரிட்டோரியா நிர்வாகத் தலைநகர். சிங்கங்களும் யானைகளும் உள்ளன.","quiz":true},{"id":716,"iso2":"ZW","continent":"africa","name":"Zimbabwe","nameTa":"ஜிம்பாப்வே","capital":"Harare","capitalTa":"ஹராரே","lang":"English, Shona","langTa":"ஆங்கிலம்","fact":"The capital of Zimbabwe is Harare.","factTa":"ஜிம்பாப்வே நாட்டின் தலைநகர் ஹராரே.","quiz":false},{"id":724,"iso2":"ES","continent":"europe","name":"Spain","nameTa":"ஸ்பெயின்","capital":"Madrid","capitalTa":"மாட்ரிட்","lang":"Spanish","langTa":"ஸ்பானிஷ்","fact":"Spain is famous for flamenco music and sunny coasts. Madrid is high on a dry plateau.","factTa":"ஸ்பெயின் ஃப்லமெங்கோ இசைக்கும் வெயில் கடற்கரைக்கும் பெயர். மாட்ரிட் உயரமான பீடபூமியில் உள்ளது.","quiz":true},{"id":728,"iso2":"SS","continent":"africa","name":"South Sudan","nameTa":"தெற்கு சூடான்","capital":"Juba","capitalTa":"ஜூபா","lang":"English","langTa":"ஆங்கிலம்","fact":"The capital of South Sudan is Juba.","factTa":"தெற்கு சூடான் நாட்டின் தலைநகர் ஜூபா.","quiz":false},{"id":729,"iso2":"SD","continent":"africa","name":"Sudan","nameTa":"சூடான்","capital":"Khartoum","capitalTa":"கார்ட்டூம்","lang":"Arabic, English","langTa":"அரபு, ஆங்கிலம்","fact":"The capital of Sudan is Khartoum.","factTa":"சூடான் நாட்டின் தலைநகர் கார்ட்டூம்.","quiz":false},{"id":732,"iso2":"EH","continent":"africa","name":"Western Sahara","nameTa":"மேற்கு சஹாரா","capital":"Laayoune","capitalTa":"லாயூன்","lang":"Arabic","langTa":"அரபு","fact":"The capital of Western Sahara is Laayoune.","factTa":"மேற்கு சஹாரா நாட்டின் தலைநகர் லாயூன்.","quiz":false},{"id":740,"iso2":"SR","continent":"sa","name":"Suriname","nameTa":"சுரிநாம்","capital":"Paramaribo","capitalTa":"பரமாரிபோ","lang":"Dutch","langTa":"டச்சு","fact":"The capital of Suriname is Paramaribo.","factTa":"சுரிநாம் நாட்டின் தலைநகர் பரமாரிபோ.","quiz":false},{"id":748,"iso2":"SZ","continent":"africa","name":"Eswatini","nameTa":"எஸ்வாத்தினி","capital":"Mbabane","capitalTa":"ம்பாபனே","lang":"English, Swazi","langTa":"ஆங்கிலம்","fact":"The capital of Eswatini is Mbabane.","factTa":"எஸ்வாத்தினி நாட்டின் தலைநகர் ம்பாபனே.","quiz":false},{"id":752,"iso2":"SE","continent":"europe","name":"Sweden","nameTa":"ஸ்வீடன்","capital":"Stockholm","capitalTa":"ஸ்டாக்ஹோம்","lang":"Swedish","langTa":"ஸ்வீடிஷ்","fact":"Sweden is a northern land of forests and lakes. In winter the sun barely rises in the far north.","factTa":"ஸ்வீடன் காடுகளும் ஏரிகளும் நிறைந்த வடநாடு. குளிர்காலத்தில் வடக்கில் சூரியன் எழுவதே அரிது.","quiz":true},{"id":756,"iso2":"CH","continent":"europe","name":"Switzerland","nameTa":"சுவிட்சர்லாந்து","capital":"Bern","capitalTa":"பெர்ன்","lang":"German, French, Italian","langTa":"ஜெர்மன், பிரெஞ்சு","fact":"Switzerland is a mountain country of lakes and snowy Alps. It has four national languages.","factTa":"சுவிட்சர்லாந்து ஏரிகளும் பனி ஆல்ப்ஸும் கொண்ட மலைநாடு. நான்கு தேசிய மொழிகள் உண்டு.","quiz":true},{"id":760,"iso2":"SY","continent":"asia","name":"Syria","nameTa":"சிரியா","capital":"Damascus","capitalTa":"டமாஸ்கஸ்","lang":"Arabic","langTa":"அரபு","fact":"The capital of Syria is Damascus.","factTa":"சிரியா நாட்டின் தலைநகர் டமாஸ்கஸ்.","quiz":false},{"id":762,"iso2":"TJ","continent":"asia","name":"Tajikistan","nameTa":"தாஜிகிஸ்தான்","capital":"Dushanbe","capitalTa":"துஷான்பே","lang":"Tajik","langTa":"தாஜிக்","fact":"The capital of Tajikistan is Dushanbe.","factTa":"தாஜிகிஸ்தான் நாட்டின் தலைநகர் துஷான்பே.","quiz":false},{"id":764,"iso2":"TH","continent":"asia","name":"Thailand","nameTa":"தாய்லாந்து","capital":"Bangkok","capitalTa":"பாங்காக்","lang":"Thai","langTa":"தாய்","fact":"Thailand is known as the land of smiles. Bangkok is a busy city of temples and canals.","factTa":"தாய்லாந்து புன்னகைகளின் நாடு எனப்படும். பாங்காக்கில் கோயில்களும் கால்வாய்களும் உண்டு.","quiz":true},{"id":768,"iso2":"TG","continent":"africa","name":"Togo","nameTa":"டோகோ","capital":"Lome","capitalTa":"லோமே","lang":"French","langTa":"பிரெஞ்சு","fact":"The capital of Togo is Lome.","factTa":"டோகோ நாட்டின் தலைநகர் லோமே.","quiz":false},{"id":780,"iso2":"TT","continent":"na","name":"Trinidad and Tobago","nameTa":"ட்ரினிடாட் மற்றும் டொபாகோ","capital":"Port of Spain","capitalTa":"போர்ட் ஆஃப் ஸ்பெயின்","lang":"English","langTa":"ஆங்கிலம்","fact":"The capital of Trinidad and Tobago is Port of Spain.","factTa":"ட்ரினிடாட் மற்றும் டொபாகோ நாட்டின் தலைநகர் போர்ட் ஆஃப் ஸ்பெயின்.","quiz":false},{"id":784,"iso2":"AE","continent":"asia","name":"United Arab Emirates","nameTa":"ஐக்கிய அரபு எமிரேட்ஸ்","capital":"Abu Dhabi","capitalTa":"அபுதாபி","lang":"Arabic","langTa":"அரபு","fact":"The United Arab Emirates is a desert country on the Persian Gulf. Abu Dhabi is the capital; Dubai is a famous city.","factTa":"ஐக்கிய அரபு எமிரேட்ஸ் பாரசீக வளைகுடாவில் உள்ள பாலைவன நாடு. அபுதாபி தலைநகர்; துபாய் புகழ்பெற்ற நகரம்.","quiz":true},{"id":788,"iso2":"TN","continent":"africa","name":"Tunisia","nameTa":"துனிசியா","capital":"Tunis","capitalTa":"ட்யூனிஸ்","lang":"Arabic","langTa":"அரபு","fact":"The capital of Tunisia is Tunis.","factTa":"துனிசியா நாட்டின் தலைநகர் ட்யூனிஸ்.","quiz":false},{"id":792,"iso2":"TR","continent":"asia","name":"Turkey","nameTa":"துருக்கி","capital":"Ankara","capitalTa":"அங்காரா","lang":"Turkish","langTa":"துருக்கியம்","fact":"Turkey bridges Europe and Asia. Istanbul is the only big city on two continents.","factTa":"துருக்கி ஐரோப்பாவையும் ஆசியாவையும் இணைக்கிறது. இஸ்தான்புல் இரு கண்டங்களிலும் அமைந்த நகரம்.","quiz":true},{"id":795,"iso2":"TM","continent":"asia","name":"Turkmenistan","nameTa":"துர்க்மெனிஸ்தான்","capital":"Ashgabat","capitalTa":"அஷ்கபாத்","lang":"Turkmen","langTa":"துர்க்மென்","fact":"The capital of Turkmenistan is Ashgabat.","factTa":"துர்க்மெனிஸ்தான் நாட்டின் தலைநகர் அஷ்கபாத்.","quiz":false},{"id":800,"iso2":"UG","continent":"africa","name":"Uganda","nameTa":"உகாண்டா","capital":"Kampala","capitalTa":"கம்பாலா","lang":"English, Swahili","langTa":"ஆங்கிலம், சுவாஹிலி","fact":"The capital of Uganda is Kampala.","factTa":"உகாண்டா நாட்டின் தலைநகர் கம்பாலா.","quiz":false},{"id":804,"iso2":"UA","continent":"europe","name":"Ukraine","nameTa":"உக்ரைன்","capital":"Kyiv","capitalTa":"கீவ்","lang":"Ukrainian","langTa":"உக்ரைனியன்","fact":"Ukraine is a wide land of wheat fields. Kyiv sits on the Dnipro River.","factTa":"உக்ரைன் கோதுமை வயல்கள் நிறைந்த நாடு. கீவ் டினிப்ரோ ஆற்றங்கரையில் உள்ளது.","quiz":true},{"id":807,"iso2":"MK","continent":"europe","name":"North Macedonia","nameTa":"வட மாசிடோனியா","capital":"Skopje","capitalTa":"ஸ்கோப்யே","lang":"Macedonian","langTa":"மாசிடோனியன்","fact":"The capital of North Macedonia is Skopje.","factTa":"வட மாசிடோனியா நாட்டின் தலைநகர் ஸ்கோப்யே.","quiz":false},{"id":818,"iso2":"EG","continent":"africa","name":"Egypt","nameTa":"எகிப்து","capital":"Cairo","capitalTa":"கெய்ரோ","lang":"Arabic","langTa":"அரபு","fact":"Egypt is the land of the Nile and the pyramids of Giza, built thousands of years ago.","factTa":"எகிப்து நைல் ஆற்றின் நாடு. கீசாவின் பிரமிடுகள் ஆயிரக்கணக்கான ஆண்டுகளுக்கு முன் கட்டப்பட்டன.","quiz":true},{"id":826,"iso2":"GB","continent":"europe","name":"United Kingdom","nameTa":"ஐக்கிய அரசு","capital":"London","capitalTa":"இலண்டன்","lang":"English","langTa":"ஆங்கிலம்","fact":"The United Kingdom is made of England, Scotland, Wales, and Northern Ireland. London sits on the River Thames.","factTa":"ஐக்கிய அரசு இங்கிலாந்து, ஸ்காட்லாந்து, வேல்ஸ், வட அயர்லாந்து ஆகியவை. இலண்டன் தேம்ஸ் ஆற்றங்கரையில் உள்ளது.","quiz":true},{"id":834,"iso2":"TZ","continent":"africa","name":"Tanzania","nameTa":"தான்சானியா","capital":"Dodoma","capitalTa":"டோடோமா","lang":"Swahili, English","langTa":"சுவாஹிலி, ஆங்கிலம்","fact":"The capital of Tanzania is Dodoma.","factTa":"தான்சானியா நாட்டின் தலைநகர் டோடோமா.","quiz":false},{"id":840,"iso2":"US","continent":"na","name":"United States","nameTa":"அமெரிக்கா","capital":"Washington, D.C.","capitalTa":"வாஷிங்டன்","lang":"English","langTa":"ஆங்கிலம்","fact":"The United States is a huge country of 50 states, from icy Alaska to sunny Florida.","factTa":"அமெரிக்கா 50 மாநிலங்கள் கொண்ட பெரிய நாடு. அலாஸ்கா பனி, ஃப்ளோரிடா வெயில்.","quiz":true},{"id":854,"iso2":"BF","continent":"africa","name":"Burkina Faso","nameTa":"புர்கினா பாசோ","capital":"Ouagadougou","capitalTa":"வாகதூகு","lang":"French","langTa":"பிரெஞ்சு","fact":"The capital of Burkina Faso is Ouagadougou.","factTa":"புர்கினா பாசோ நாட்டின் தலைநகர் வாகதூகு.","quiz":false},{"id":858,"iso2":"UY","continent":"sa","name":"Uruguay","nameTa":"உருகுவே","capital":"Montevideo","capitalTa":"மான்டேவிடியோ","lang":"Spanish","langTa":"ஸ்பானிஷ்","fact":"The capital of Uruguay is Montevideo.","factTa":"உருகுவே நாட்டின் தலைநகர் மான்டேவிடியோ.","quiz":false},{"id":860,"iso2":"UZ","continent":"asia","name":"Uzbekistan","nameTa":"உஸ்பெகிஸ்தான்","capital":"Tashkent","capitalTa":"தாஷ்கண்ட்","lang":"Uzbek","langTa":"உஸ்பெக்","fact":"The capital of Uzbekistan is Tashkent.","factTa":"உஸ்பெகிஸ்தான் நாட்டின் தலைநகர் தாஷ்கண்ட்.","quiz":false},{"id":862,"iso2":"VE","continent":"sa","name":"Venezuela","nameTa":"வெனிசுலா","capital":"Caracas","capitalTa":"கராகஸ்","lang":"Spanish","langTa":"ஸ்பானிஷ்","fact":"The capital of Venezuela is Caracas.","factTa":"வெனிசுலா நாட்டின் தலைநகர் கராகஸ்.","quiz":false},{"id":887,"iso2":"YE","continent":"asia","name":"Yemen","nameTa":"ஏமன்","capital":"Sana'a","capitalTa":"சனா","lang":"Arabic","langTa":"அரபு","fact":"The capital of Yemen is Sana'a.","factTa":"ஏமன் நாட்டின் தலைநகர் சனா.","quiz":false},{"id":894,"iso2":"ZM","continent":"africa","name":"Zambia","nameTa":"சாம்பியா","capital":"Lusaka","capitalTa":"லுசாகா","lang":"English","langTa":"ஆங்கிலம்","fact":"The capital of Zambia is Lusaka.","factTa":"சாம்பியா நாட்டின் தலைநகர் லுசாகா.","quiz":false},{"id":"xk","iso2":"XK","continent":"europe","name":"Kosovo","nameTa":"கொசோவோ","capital":"Pristina","capitalTa":"ப்ரிஸ்டினா","lang":"Albanian, Serbian","langTa":"அல்பேனியம்","fact":"The capital of Kosovo is Pristina.","factTa":"கொசோவோ நாட்டின் தலைநகர் ப்ரிஸ்டினா.","quiz":false},{"id":"sl","iso2":"SO","continent":"africa","name":"Somaliland","nameTa":"சோமாலிலாந்து","capital":"Hargeisa","capitalTa":"ஹர்கெய்சா","lang":"Somali, Arabic","langTa":"சோமாலி","fact":"The capital of Somaliland is Hargeisa.","factTa":"சோமாலிலாந்து நாட்டின் தலைநகர் ஹர்கெய்சா.","quiz":false},{"id":"nc","iso2":"CY","continent":"asia","name":"Northern Cyprus","nameTa":"வடக்கு சைப்ரஸ்","capital":"North Nicosia","capitalTa":"வட நிக்கோசியா","lang":"Turkish","langTa":"துருக்கியம்","fact":"The capital of Northern Cyprus is North Nicosia.","factTa":"வடக்கு சைப்ரஸ் நாட்டின் தலைநகர் வட நிக்கோசியா.","quiz":false}],"continents":[{"id":"asia","name":"Asia","nameTa":"ஆசியா","color":12887412,"lat":28,"lng":90},{"id":"africa","name":"Africa","nameTa":"ஆப்பிரிக்கா","color":12878938,"lat":2,"lng":20},{"id":"europe","name":"Europe","nameTa":"ஐரோப்பா","color":9414778,"lat":50,"lng":15},{"id":"na","name":"North America","nameTa":"வட அமெரிக்கா","color":6987406,"lat":45,"lng":-100},{"id":"sa","name":"South America","nameTa":"தென் அமெரிக்கா","color":12876394,"lat":-15,"lng":-58},{"id":"oceania","name":"Oceania","nameTa":"ஓசியானியா","color":6987448,"lat":-18,"lng":145}],"continentColors":{"asia":12887412,"africa":12878938,"europe":9414778,"na":6987406,"sa":12876394,"oceania":6987448,"antarctica":14015462},"aliases":{"united states of america":840,"dem. rep. congo":180,"dominican rep.":214,"central african rep.":140,"eq. guinea":226,"bosnia and herz.":70,"s. sudan":728,"w. sahara":732,"falkland is.":238,"solomon is.":90,"fr. s. antarctic lands":260,"macedonia":807,"czechia":203,"cote d'ivoire":384,"côte d'ivoire":384,"eswatini":748,"n. cyprus":"nc","somaliland":"sl","kosovo":"xk","north macedonia":807,"ivory coast":384,"united states":840,"south africa":710,"sri lanka":144}};

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { feature } from "topojson-client";
import ConicPolygonGeometry from "three-conic-polygon-geometry";

const ATLAS = "https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-110m.json";
const RADIUS = 1;
const OCEAN_R = 0.985;
const START = { lat: 21.5, lng: 78.9, distance: 3.15 };
const SPEEDS = [1, 3, 10];
const QUIZ_LEN = 8;

const COPY = {
  en: {
    title: "Our World",
    hint: "Tap a country to learn its capital.",
    hintQuiz: "Tap the country that matches the capital.",
    pause: "Pause",
    spin: "Spin",
    slow: "Slow",
    medium: "Medium",
    fast: "Fast",
    seeAll: "See all",
    quiz: "L & V Quiz",
    explore: "Explore",
    langSwitch: "தமிழ்",
    capital: "Capital",
    language: "Language",
    lokesh: "Lokesh",
    varsha: "Varsha",
    both: "Lokesh & Varsha",
    correct: "Yes! That's right.",
    wrong: "Not that one. Try again.",
    reveal: (capital, country) => `The capital ${capital} belongs to ${country}.`,
    score: "Score",
    again: "Play again",
    done: (score, total) => `You got ${score} of ${total}!`,
    doneCheer: "Want another round?",
    question: (capital) => `Which country has the capital ${capital}?`,
    next: "Next",
    loading: "Spinning the globe…",
  },
  ta: {
    title: "நம் உலகம்",
    hint: "ஒரு நாட்டைத் தொட்டு, தலைநகரை அறியுங்கள்.",
    hintQuiz: "தலைநகருக்குரிய நாட்டைத் தொடுங்கள்.",
    pause: "நிறுத்து",
    spin: "சுற்று",
    slow: "மெதுவாக",
    medium: "நடுத்தரம்",
    fast: "வேகமாக",
    seeAll: "முழு உலகம்",
    quiz: "லோகேஷ் வினா",
    explore: "உலா",
    langSwitch: "English",
    capital: "தலைநகர்",
    language: "மொழி",
    lokesh: "லோகேஷ்",
    varsha: "வர்ஷா",
    both: "லோகேஷ் & வர்ஷா",
    correct: "சரி! அருமை.",
    wrong: "அது அல்ல. மீண்டும் முயல்க.",
    reveal: (capital, country) => `${capital} என்பது ${country} நாட்டின் தலைநகர்.`,
    score: "மதிப்பெண்",
    again: "மீண்டும் விளையாடு",
    done: (score, total) => `${total}ல் ${score} சரி!`,
    doneCheer: "இன்னொரு சுற்று வேண்டுமா?",
    question: (capital) => `${capital} எந்த நாட்டின் தலைநகர்?`,
    next: "அடுத்து",
    loading: "உலகம் சுழல்கிறது…",
  },
};

const BY_ID = new Map(DATA.countries.map((c) => [c.id, c]));
const BY_NAME = new Map(DATA.countries.map((c) => [c.name.toLowerCase(), c]));
const QUIZ_COUNTRIES = DATA.countries.filter((c) => c.quiz && c.capital !== "None");
const INDIA = BY_ID.get(356);

function countryFromFeature(id, name) {
  if (typeof id === "number" && BY_ID.has(id)) return BY_ID.get(id);
  if (typeof id === "string" && id !== "") {
    const n = Number(id);
    if (Number.isFinite(n) && BY_ID.has(n)) return BY_ID.get(n);
    if (BY_ID.has(id)) return BY_ID.get(id);
  }
  const key = (name || "").trim().toLowerCase();
  if (BY_NAME.has(key)) return BY_NAME.get(key);
  const alias = DATA.aliases[key];
  if (alias !== undefined) return BY_ID.get(alias);
  return undefined;
}

function flagEmoji(iso2) {
  if (!iso2 || iso2.length !== 2) return "";
  const up = iso2.toUpperCase();
  if (up === "XK") return "";
  return String.fromCodePoint(...[...up].map((c) => 127397 + c.charCodeAt(0)));
}

function hex(n) {
  return `#${n.toString(16).padStart(6, "0")}`;
}

function shuffle(list) {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function polar2Cartesian(lat, lng, r) {
  const phi = ((90 - lat) * Math.PI) / 180;
  const theta = ((90 - lng) * Math.PI) / 180;
  return new THREE.Vector3(
    r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta),
  );
}

function ringCentroid(ring) {
  let x = 0, y = 0, z = 0, n = 0;
  const last = ring.length - 1;
  const end = last > 0 && ring[0][0] === ring[last][0] && ring[0][1] === ring[last][1] ? last : ring.length;
  for (let i = 0; i < end; i++) {
    const lng = ring[i][0];
    const lat = ring[i][1];
    const φ = (lat * Math.PI) / 180;
    const λ = (lng * Math.PI) / 180;
    x += Math.cos(φ) * Math.cos(λ);
    y += Math.cos(φ) * Math.sin(λ);
    z += Math.sin(φ);
    n++;
  }
  if (!n) return { lat: 0, lng: 0 };
  x /= n; y /= n; z /= n;
  const hyp = Math.hypot(x, y);
  return {
    lat: (Math.atan2(z, hyp) * 180) / Math.PI,
    lng: (Math.atan2(y, x) * 180) / Math.PI,
  };
}

function polygonsOf(geom) {
  if (geom.type === "Polygon") return [geom.coordinates];
  if (geom.type === "MultiPolygon") return geom.coordinates;
  return [];
}

function makeStars() {
  const count = 1800;
  const pos = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const v = polar2Cartesian(Math.random() * 180 - 90, Math.random() * 360 - 180, 12 + Math.random() * 16);
    pos[i * 3] = v.x;
    pos[i * 3 + 1] = v.y;
    pos[i * 3 + 2] = v.z;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  const points = new THREE.Points(geo, new THREE.PointsMaterial({
    color: 0xe8e4dc, size: 0.035, sizeAttenuation: true, transparent: true, opacity: 0.7, depthWrite: false,
  }));
  points.raycast = () => {};
  return points;
}

async function createGlobe(canvas, onSelect) {
  const world = await fetch(ATLAS).then((r) => {
    if (!r.ok) throw new Error("atlas");
    return r.json();
  });

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  renderer.setClearColor(0x07070b, 1);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, 1, 0.08, 80);
  camera.position.copy(polar2Cartesian(START.lat, START.lng, START.distance));

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.enablePan = false;
  controls.minDistance = 1.38;
  controls.maxDistance = 6.2;
  controls.minPolarAngle = 0.08;
  controls.maxPolarAngle = Math.PI - 0.08;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.45;
  controls.target.set(0, 0, 0);

  scene.add(new THREE.AmbientLight(0xffffff, 1.05));
  scene.add(new THREE.HemisphereLight(0xc5d4e2, 0x1c1812, 0.32));
  const sun = new THREE.DirectionalLight(0xfff6ea, 0.28);
  sun.position.set(3.2, 4.2, 2.4);
  scene.add(sun);
  scene.add(makeStars());

  const ocean = new THREE.Mesh(
    new THREE.SphereGeometry(OCEAN_R, 64, 48),
    new THREE.MeshLambertMaterial({ color: 0x0c2a44 }),
  );
  ocean.raycast = () => {};
  scene.add(ocean);

  const atmos = new THREE.Mesh(
    new THREE.SphereGeometry(1.12, 48, 32),
    new THREE.MeshBasicMaterial({
      color: 0x6ea0c8, transparent: true, opacity: 0.16, side: THREE.BackSide, depthWrite: false,
    }),
  );
  atmos.raycast = () => {};
  scene.add(atmos);

  const land = new THREE.Group();
  scene.add(land);

  const continentMats = new Map();
  function matFor(color) {
    let m = continentMats.get(color);
    if (!m) {
      m = new THREE.MeshLambertMaterial({
        color, emissive: color, emissiveIntensity: 0.08,
        polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1,
      });
      continentMats.set(color, m);
    }
    return m;
  }

  const selectedMat = new THREE.MeshLambertMaterial({
    color: 0xf2d7a0, emissive: 0x3a2a10, emissiveIntensity: 0.28,
    polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2,
  });

  const entries = new Map();
  const meshToKey = new WeakMap();
  const fc = feature(world, world.objects.countries);

  for (const feat of fc.features) {
    const geom = feat.geometry;
    if (!geom) continue;
    const rawId = feat.id;
    const numeric =
      typeof rawId === "number" ? rawId
        : typeof rawId === "string" && rawId !== "" && Number.isFinite(Number(rawId)) ? Number(rawId)
          : undefined;
    const name = feat.properties?.name ?? "Unknown";
    const country = countryFromFeature(numeric ?? name, name) ?? {
      id: numeric ?? name, iso2: "", continent: "asia", name, nameTa: name,
      capital: "—", capitalTa: "—", lang: "—", langTa: "—",
      fact: `This is ${name}.`, factTa: `இது ${name}.`, quiz: false,
    };
    const material = matFor(DATA.continentColors[country.continent] ?? 0xc4a574);
    const meshes = [];
    const polys = polygonsOf(geom);
    let best = { lat: 0, lng: 0, n: 0 };

    for (const poly of polys) {
      if (!poly?.[0] || poly[0].length < 4) continue;
      try {
        const geometry = new ConicPolygonGeometry(poly, RADIUS * 0.998, RADIUS, false, true, false, 2);
        const mesh = new THREE.Mesh(geometry, material);
        land.add(mesh);
        meshes.push(mesh);
      } catch {
        continue;
      }
      if (poly[0].length > best.n) best = { ...ringCentroid(poly[0]), n: poly[0].length };
    }
    if (!meshes.length) continue;
    const key = String(country.id);
    const existing = entries.get(key);
    if (existing) {
      existing.meshes.push(...meshes);
      for (const mesh of meshes) meshToKey.set(mesh, key);
    } else {
      entries.set(key, { country, meshes, centroid: { lat: best.lat, lng: best.lng } });
      for (const mesh of meshes) meshToKey.set(mesh, key);
    }
  }

  let highlighted = null;
  function highlight(id) {
    if (highlighted) {
      const color = DATA.continentColors[highlighted.country.continent];
      const m = matFor(color);
      for (const mesh of highlighted.meshes) mesh.material = m;
      highlighted = null;
    }
    if (id === null || id === undefined) return;
    const entry = entries.get(String(id));
    if (!entry) return;
    for (const mesh of entry.meshes) mesh.material = selectedMat;
    highlighted = entry;
  }

  let fly = null;
  function flyToLatLng(lat, lng, distance = 2.35) {
    fly = {
      fromPos: camera.position.clone(),
      toPos: polar2Cartesian(lat, lng, distance),
      fromTarget: controls.target.clone(),
      toTarget: polar2Cartesian(lat, lng, 0.08),
      t: 0,
      dur: 0.95,
    };
    controls.autoRotate = false;
  }
  function resetView() { flyToLatLng(START.lat, START.lng, 4.6); }

  let playing = true;
  let speed = 3;
  function applyRotate() {
    controls.autoRotate = playing && !fly;
    controls.autoRotateSpeed = 0.14 * speed;
  }
  applyRotate();

  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  let downX = 0, downY = 0, downId = -1;

  function pick(clientX, clientY) {
    const rect = canvas.getBoundingClientRect();
    pointer.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    const hits = raycaster.intersectObjects(land.children, false);
    if (!hits.length) return null;
    const key = meshToKey.get(hits[0].object);
    if (!key) return null;
    return entries.get(key)?.country ?? null;
  }

  canvas.addEventListener("pointerdown", (ev) => {
    downX = ev.clientX; downY = ev.clientY; downId = ev.pointerId;
  });
  canvas.addEventListener("pointerup", (ev) => {
    if (ev.pointerId !== downId) return;
    downId = -1;
    if (Math.hypot(ev.clientX - downX, ev.clientY - downY) > 8) return;
    const country = pick(ev.clientX, ev.clientY);
    if (!country) return;
    highlight(country.id);
    const c = entries.get(String(country.id))?.centroid;
    if (c) flyToLatLng(c.lat, c.lng, 2.28);
    onSelect(country);
  });

  function resize() {
    const w = canvas.clientWidth || window.innerWidth;
    const h = canvas.clientHeight || window.innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / Math.max(1, h);
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener("resize", resize);

  let last = performance.now();
  function tick(now) {
    requestAnimationFrame(tick);
    const delta = Math.min((now - last) / 1000, 0.1);
    last = now;
    if (fly) {
      fly.t += delta;
      const u = Math.min(1, fly.t / fly.dur);
      const e = 1 - (1 - u) ** 3;
      camera.position.lerpVectors(fly.fromPos, fly.toPos, e);
      controls.target.lerpVectors(fly.fromTarget, fly.toTarget, e);
      if (u >= 1) { fly = null; applyRotate(); }
    }
    controls.update();
    renderer.render(scene, camera);
  }
  requestAnimationFrame(tick);

  highlight(356);
  if (INDIA) onSelect(INDIA);

  return {
    flyToLatLng,
    resetView,
    setPlaying(v) { playing = v; applyRotate(); },
    setSpeed(s) { speed = s; applyRotate(); },
    highlight,
    centroidOf(id) { return entries.get(String(id))?.centroid ?? null; },
  };
}

function readLang() {
  try {
    const v = localStorage.getItem("our-world-lang");
    if (v === "ta" || v === "en") return v;
  } catch { /* ignore */ }
  return "en";
}

function boot() {
  const canvas = document.getElementById("view");
  const titleEl = document.getElementById("title");
  const hintEl = document.getElementById("hint");
  const card = document.getElementById("card");
  const chipsEl = document.getElementById("chips");
  const toggle = document.getElementById("toggle");
  const home = document.getElementById("home");
  const quizBtn = document.getElementById("quiz");
  const langBtn = document.getElementById("lang");
  if (!canvas || !card) return;

  let lang = readLang();
  let playing = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let speed = 3;
  let mode = "explore";
  let selected = INDIA;
  let activeChip = "india";
  let api = null;
  let quiz = null;

  const t = () => COPY[lang];
  const nameOf = (c) => (lang === "ta" ? c.nameTa : c.name);
  const capitalOf = (c) => (lang === "ta" ? c.capitalTa : c.capital);
  const factOf = (c) => (lang === "ta" ? c.factTa : c.fact);
  const langOf = (c) => (lang === "ta" ? c.langTa : c.lang);

  function renderCard() {
    const copy = t();
    titleEl.textContent = copy.title;
    hintEl.textContent = mode === "quiz" ? copy.hintQuiz : copy.hint;
    toggle.textContent = playing ? copy.pause : copy.spin;
    toggle.setAttribute("aria-pressed", playing ? "false" : "true");
    home.textContent = copy.seeAll;
    if (mode === "quiz") {
      quizBtn.classList.remove("quiz-feat");
      quizBtn.textContent = copy.explore;
    } else {
      quizBtn.classList.add("quiz-feat");
      quizBtn.innerHTML = `<img src="./lokesh.png" width="22" height="22" alt=""><img src="./varsha.png" width="22" height="22" alt="">${copy.quiz}`;
    }
    quizBtn.setAttribute("aria-pressed", mode === "quiz" ? "true" : "false");
    langBtn.textContent = copy.langSwitch;
    document.getElementById("view").setAttribute("aria-label", lang === "ta" ? "முப்பரிமாண உலக உருண்டை" : "3D world globe");

    const spdBtns = [...document.querySelectorAll(".spd")];
    spdBtns.forEach((btn, i) => {
      btn.textContent = i === 0 ? copy.slow : i === 1 ? copy.medium : copy.fast;
      btn.setAttribute("aria-pressed", Number(btn.dataset.speed) === speed ? "true" : "false");
    });

    if (mode === "quiz" && quiz) {
      if (quiz.status === "done") {
        card.innerHTML = `<div class="who-line">
            <span class="faces">
              <img src="./lokesh.png" width="32" height="32" alt="">
              <img src="./varsha.png" width="32" height="32" alt="">
            </span>
            <span>
              <b>${copy.both}</b>
              <p class="meta">${copy.done(quiz.score, quiz.queue.length)}</p>
              <p class="say">${copy.doneCheer}</p>
            </span>
          </div>
          <button type="button" class="next" id="again">${copy.again}</button>`;
        document.getElementById("again")?.addEventListener("click", startQuiz);
        return;
      }
      const current = quiz.queue[quiz.index];
      let extra = "";
      if (quiz.status === "correct") {
        extra = `<div class="who-line"><img src="./varsha.png" width="36" height="36" alt=""><span><b>${copy.varsha}</b><p class="status ok">${copy.correct}</p></span></div>
          <button type="button" class="next" id="next">${copy.next}</button>`;
      } else if (quiz.status === "wrong") {
        extra = `<div class="who-line"><img src="./varsha.png" width="36" height="36" alt=""><span><b>${copy.varsha}</b><p class="status bad">${copy.wrong}</p></span></div>`;
      } else if (quiz.status === "reveal") {
        extra = `<div class="who-line"><img src="./varsha.png" width="36" height="36" alt=""><span><b>${copy.varsha}</b><p class="status ok">${copy.reveal(capitalOf(current), nameOf(current))}</p></span></div>
          <button type="button" class="next" id="next">${copy.next}</button>`;
      }
      card.innerHTML = `<div class="who-line">
          <img src="./lokesh.png" width="36" height="36" alt="">
          <span>
            <b>${copy.lokesh}</b>
            <p class="meta">${copy.question(capitalOf(current))}</p>
            <p class="say">${copy.score} ${quiz.score} / ${quiz.queue.length}</p>
          </span>
        </div>${extra}`;
      document.getElementById("next")?.addEventListener("click", advanceQuiz);
      return;
    }

    const flag = flagEmoji(selected.iso2);
    card.innerHTML = `<h2>${flag ? flag + " " : ""}${nameOf(selected)}</h2>
      <p class="meta">${copy.capital}: ${capitalOf(selected)}</p>
      <p class="meta">${copy.language}: ${langOf(selected)}</p>
      <p id="fact-blurb">${factOf(selected)}</p>`;
  }

  function renderChips() {
    if (mode === "quiz") {
      chipsEl.hidden = true;
      chipsEl.innerHTML = "";
      return;
    }
    chipsEl.hidden = false;
    chipsEl.innerHTML = "";
    const items = [
      { key: "india", label: nameOf(INDIA), color: hex(DATA.continents[0].color) },
      ...DATA.continents.map((c) => ({ key: c.id, label: lang === "ta" ? c.nameTa : c.name, color: hex(c.color) })),
    ];
    for (const item of items) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "chip";
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-pressed", activeChip === item.key ? "true" : "false");
      btn.innerHTML = `<span class="dot" style="background:${item.color}"></span>${item.label}`;
      btn.addEventListener("click", () => onChip(item.key));
      chipsEl.appendChild(btn);
    }
  }

  function paint() {
    renderCard();
    renderChips();
  }

  function onSelect(country) {
    if (mode === "quiz") {
      applyQuizTap(country);
      return;
    }
    selected = country;
    activeChip = country.id === 356 ? "india" : country.continent;
    paint();
  }

  function onChip(key) {
    if (mode === "quiz") return;
    activeChip = key;
    if (key === "india") {
      selected = INDIA;
      api?.highlight(356);
      const c = api?.centroidOf(356);
      if (c) api.flyToLatLng(c.lat, c.lng, 2.45);
      paint();
      return;
    }
    const continent = DATA.continents.find((c) => c.id === key);
    if (!continent) return;
    api?.highlight(null);
    api?.flyToLatLng(continent.lat, continent.lng, 3.35);
    paint();
  }

  function applyQuizTap(country) {
    if (!quiz || quiz.status === "done" || quiz.status === "correct" || quiz.status === "reveal") return;
    const target = quiz.queue[quiz.index];
    if (!target) return;
    api?.highlight(country.id);
    if (String(country.id) === String(target.id)) {
      quiz = { ...quiz, status: "correct", score: quiz.score + 1, tries: 0 };
      selected = country;
      const c = api?.centroidOf(country.id);
      if (c) api.flyToLatLng(c.lat, c.lng, 2.28);
      paint();
      return;
    }
    const tries = quiz.tries + 1;
    if (tries >= 2) {
      quiz = { ...quiz, status: "reveal", tries };
      api?.highlight(target.id);
      const c = api?.centroidOf(target.id);
      if (c) api.flyToLatLng(c.lat, c.lng, 2.28);
      selected = target;
      paint();
      return;
    }
    quiz = { ...quiz, status: "wrong", tries };
    paint();
  }

  function startQuiz() {
    quiz = { queue: shuffle(QUIZ_COUNTRIES).slice(0, QUIZ_LEN), index: 0, score: 0, tries: 0, status: "ask" };
    mode = "quiz";
    playing = false;
    api?.setPlaying(false);
    api?.highlight(null);
    api?.resetView();
    activeChip = "";
    paint();
  }

  function advanceQuiz() {
    if (!quiz) return;
    const index = quiz.index + 1;
    if (index >= quiz.queue.length) {
      quiz = { ...quiz, status: "done" };
      paint();
      return;
    }
    quiz = { ...quiz, index, tries: 0, status: "ask" };
    api?.highlight(null);
    api?.resetView();
    paint();
  }

  function leaveQuiz() {
    mode = "explore";
    quiz = null;
    selected = INDIA;
    activeChip = "india";
    api?.highlight(356);
    const c = api?.centroidOf(356);
    if (c) api.flyToLatLng(c.lat, c.lng, 2.45);
    paint();
  }

  toggle.addEventListener("click", () => {
    playing = !playing;
    api?.setPlaying(playing);
    paint();
  });
  document.querySelectorAll(".spd").forEach((btn) => {
    btn.addEventListener("click", () => {
      speed = Number(btn.dataset.speed);
      api?.setSpeed(speed);
      paint();
    });
  });
  home.addEventListener("click", () => {
    api?.resetView();
    activeChip = "";
    paint();
  });
  quizBtn.addEventListener("click", () => (mode === "quiz" ? leaveQuiz() : startQuiz()));
  langBtn.addEventListener("click", () => {
    lang = lang === "en" ? "ta" : "en";
    try { localStorage.setItem("our-world-lang", lang); } catch { /* ignore */ }
    paint();
  });

  card.innerHTML = `<h2>${t().title}</h2><p>${t().loading}</p>`;
  createGlobe(canvas, onSelect).then((globe) => {
    api = globe;
    api.setPlaying(playing);
    api.setSpeed(speed);
    paint();
  }).catch(() => {
    card.innerHTML = `<h2>${t().title}</h2><p>Could not load the globe. Check your connection and try again.</p>`;
  });
}

boot();
