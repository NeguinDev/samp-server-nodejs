const {
	SampFunctions: {
		CreatePlayerTextDraw,
		PlayerTextDrawLetterSize,
		PlayerTextDrawTextSize,
		PlayerTextDrawAlignment,
		PlayerTextDrawColor,
		PlayerTextDrawSetShadow,
		PlayerTextDrawSetOutline,
		PlayerTextDrawSetBackgroundColor,
		PlayerTextDrawSetFont,
		PlayerTextDrawSetProportional,
		PlayerTextDrawSetSelectable,
		PlayerTextDrawSetString,
		PlayerTextDrawSetPreviewModel,
		PlayerTextDrawSetPreviewRot,
		PlayerTextDrawSetPreviewVehCol,
		PlayerTextDrawUseBox,
		PlayerTextDrawBoxColor,
		PlayerTextDrawFont
	},
} = require("samp-node-lib");

let TDGaragem = {};

function LoadTDGaragem(playerid, callback) {
	TDGaragem[playerid] = [];

	TDGaragem[playerid][0] = CreatePlayerTextDraw(playerid, 192.916687, 135.037033, "box");
	PlayerTextDrawLetterSize(playerid, TDGaragem[playerid][0], 0.000000, 21.333339);
	PlayerTextDrawTextSize(playerid, TDGaragem[playerid][0], 459.000000, 0.000000);
	PlayerTextDrawAlignment(playerid, TDGaragem[playerid][0], 1);
	PlayerTextDrawColor(playerid, TDGaragem[playerid][0], -1);
	PlayerTextDrawUseBox(playerid, TDGaragem[playerid][0], 1);
	PlayerTextDrawBoxColor(playerid, TDGaragem[playerid][0], 589505535);
	PlayerTextDrawSetShadow(playerid, TDGaragem[playerid][0], 0);
	PlayerTextDrawSetOutline(playerid, TDGaragem[playerid][0], 0);
	PlayerTextDrawBackgroundColor(playerid, TDGaragem[playerid][0], 255);
	PlayerTextDrawFont(playerid, TDGaragem[playerid][0], 1);
	PlayerTextDrawSetProportional(playerid, TDGaragem[playerid][0], 1);
	PlayerTextDrawSetShadow(playerid, TDGaragem[playerid][0], 0);

	TDGaragem[playerid][1] = CreatePlayerTextDraw(playerid, 348.750122, 134.973937, "box");
	PlayerTextDrawLetterSize(playerid, TDGaragem[playerid][1], 0.000000, 21.371004);
	PlayerTextDrawTextSize(playerid, TDGaragem[playerid][1], 458.000000, 0.000000);
	PlayerTextDrawAlignment(playerid, TDGaragem[playerid][1], 1);
	PlayerTextDrawColor(playerid, TDGaragem[playerid][1], -1);
	PlayerTextDrawUseBox(playerid, TDGaragem[playerid][1], 1);
	PlayerTextDrawBoxColor(playerid, TDGaragem[playerid][1], 454761471);
	PlayerTextDrawSetShadow(playerid, TDGaragem[playerid][1], 0);
	PlayerTextDrawSetOutline(playerid, TDGaragem[playerid][1], 0);
	PlayerTextDrawBackgroundColor(playerid, TDGaragem[playerid][1], 255);
	PlayerTextDrawFont(playerid, TDGaragem[playerid][1], 1);
	PlayerTextDrawSetProportional(playerid, TDGaragem[playerid][1], 1);
	PlayerTextDrawSetShadow(playerid, TDGaragem[playerid][1], 0);

	TDGaragem[playerid][2] = CreatePlayerTextDraw(playerid, 207.916610, 141.777694, "NAME_VEHICLE");
	PlayerTextDrawLetterSize(playerid, TDGaragem[playerid][2], 0.173333, 0.879258);
	PlayerTextDrawAlignment(playerid, TDGaragem[playerid][2], 1);
	PlayerTextDrawColor(playerid, TDGaragem[playerid][2], -1);
	PlayerTextDrawSetShadow(playerid, TDGaragem[playerid][2], 0);
	PlayerTextDrawSetOutline(playerid, TDGaragem[playerid][2], 0);
	PlayerTextDrawBackgroundColor(playerid, TDGaragem[playerid][2], 255);
	PlayerTextDrawFont(playerid, TDGaragem[playerid][2], 1);
	PlayerTextDrawSetProportional(playerid, TDGaragem[playerid][2], 1);
	PlayerTextDrawSetShadow(playerid, TDGaragem[playerid][2], 0);

	TDGaragem[playerid][3] = CreatePlayerTextDraw(playerid, 207.916610, 141.777694, "NAME_VEHICLE");
	PlayerTextDrawLetterSize(playerid, TDGaragem[playerid][3], 0.173333, 0.879258);
	PlayerTextDrawAlignment(playerid, TDGaragem[playerid][3], 1);
	PlayerTextDrawColor(playerid, TDGaragem[playerid][3], -1);
	PlayerTextDrawSetShadow(playerid, TDGaragem[playerid][3], 0);
	PlayerTextDrawSetOutline(playerid, TDGaragem[playerid][3], 0);
	PlayerTextDrawBackgroundColor(playerid, TDGaragem[playerid][3], 255);
	PlayerTextDrawFont(playerid, TDGaragem[playerid][3], 1);
	PlayerTextDrawSetProportional(playerid, TDGaragem[playerid][3], 1);
	PlayerTextDrawSetShadow(playerid, TDGaragem[playerid][3], 0);

	TDGaragem[playerid][4] = CreatePlayerTextDraw(playerid, 208.333480, 152.666564, "box");
	PlayerTextDrawLetterSize(playerid, TDGaragem[playerid][4], 0.000000, 0.767368);
	PlayerTextDrawTextSize(playerid, TDGaragem[playerid][4], 256.000000, 0.000000);
	PlayerTextDrawAlignment(playerid, TDGaragem[playerid][4], 1);
	PlayerTextDrawColor(playerid, TDGaragem[playerid][4], -1);
	PlayerTextDrawUseBox(playerid, TDGaragem[playerid][4], 1);
	PlayerTextDrawBoxColor(playerid, TDGaragem[playerid][4], 1678485503);
	PlayerTextDrawSetShadow(playerid, TDGaragem[playerid][4], 0);
	PlayerTextDrawSetOutline(playerid, TDGaragem[playerid][4], 0);
	PlayerTextDrawBackgroundColor(playerid, TDGaragem[playerid][4], 255);
	PlayerTextDrawFont(playerid, TDGaragem[playerid][4], 1);
	PlayerTextDrawSetProportional(playerid, TDGaragem[playerid][4], 1);
	PlayerTextDrawSetShadow(playerid, TDGaragem[playerid][4], 0);

	TDGaragem[playerid][5] = CreatePlayerTextDraw(playerid, 231.250000, 151.629577, "CLASSIC");
	PlayerTextDrawLetterSize(playerid, TDGaragem[playerid][5], 0.165416, 0.889629);
	PlayerTextDrawAlignment(playerid, TDGaragem[playerid][5], 2);
	PlayerTextDrawColor(playerid, TDGaragem[playerid][5], 589505535);
	PlayerTextDrawSetShadow(playerid, TDGaragem[playerid][5], 0);
	PlayerTextDrawSetOutline(playerid, TDGaragem[playerid][5], 0);
	PlayerTextDrawBackgroundColor(playerid, TDGaragem[playerid][5], 255);
	PlayerTextDrawFont(playerid, TDGaragem[playerid][5], 1);
	PlayerTextDrawSetProportional(playerid, TDGaragem[playerid][5], 1);
	PlayerTextDrawSetShadow(playerid, TDGaragem[playerid][5], 0);

	TDGaragem[playerid][6] = CreatePlayerTextDraw(playerid, 363.226074, 141.777694, "DADOS_GERAIS");
	PlayerTextDrawLetterSize(playerid, TDGaragem[playerid][6], 0.173333, 0.879258);
	PlayerTextDrawAlignment(playerid, TDGaragem[playerid][6], 1);
	PlayerTextDrawColor(playerid, TDGaragem[playerid][6], -1);
	PlayerTextDrawSetShadow(playerid, TDGaragem[playerid][6], 0);
	PlayerTextDrawSetOutline(playerid, TDGaragem[playerid][6], 0);
	PlayerTextDrawBackgroundColor(playerid, TDGaragem[playerid][6], 255);
	PlayerTextDrawFont(playerid, TDGaragem[playerid][6], 1);
	PlayerTextDrawSetProportional(playerid, TDGaragem[playerid][6], 1);
	PlayerTextDrawSetShadow(playerid, TDGaragem[playerid][6], 0);

	TDGaragem[playerid][7] = CreatePlayerTextDraw(playerid, 375.833465, 159.462982, "box");
	PlayerTextDrawLetterSize(playerid, TDGaragem[playerid][7], 0.000000, -0.208326);
	PlayerTextDrawTextSize(playerid, TDGaragem[playerid][7], 436.000000, 0.000000);
	PlayerTextDrawAlignment(playerid, TDGaragem[playerid][7], 1);
	PlayerTextDrawColor(playerid, TDGaragem[playerid][7], -1);
	PlayerTextDrawUseBox(playerid, TDGaragem[playerid][7], 1);
	PlayerTextDrawBoxColor(playerid, TDGaragem[playerid][7], 589505535);
	PlayerTextDrawSetShadow(playerid, TDGaragem[playerid][7], 0);
	PlayerTextDrawSetOutline(playerid, TDGaragem[playerid][7], 0);
	PlayerTextDrawBackgroundColor(playerid, TDGaragem[playerid][7], 255);
	PlayerTextDrawFont(playerid, TDGaragem[playerid][7], 1);
	PlayerTextDrawSetProportional(playerid, TDGaragem[playerid][7], 1);
	PlayerTextDrawSetShadow(playerid, TDGaragem[playerid][7], 0);

	TDGaragem[playerid][8] = CreatePlayerTextDraw(playerid, 217.083297, 177.814880, "");
	PlayerTextDrawLetterSize(playerid, TDGaragem[playerid][8], 0.000000, 0.000000);
	PlayerTextDrawTextSize(playerid, TDGaragem[playerid][8], 90.000000, 90.000000);
	PlayerTextDrawAlignment(playerid, TDGaragem[playerid][8], 1);
	PlayerTextDrawColor(playerid, TDGaragem[playerid][8], -1);
	PlayerTextDrawSetShadow(playerid, TDGaragem[playerid][8], 0);
	PlayerTextDrawSetOutline(playerid, TDGaragem[playerid][8], 0);
	PlayerTextDrawBackgroundColor(playerid, TDGaragem[playerid][8], 0);
	PlayerTextDrawFont(playerid, TDGaragem[playerid][8], 5);
	PlayerTextDrawSetProportional(playerid, TDGaragem[playerid][8], 0);
	PlayerTextDrawSetShadow(playerid, TDGaragem[playerid][8], 0);
	PlayerTextDrawSetPreviewModel(playerid, TDGaragem[playerid][8], 411);
	PlayerTextDrawSetPreviewRot(playerid, TDGaragem[playerid][8], 0.000000, 0.000000, 45.000000, 1.000000);
	PlayerTextDrawSetPreviewVehCol(playerid, TDGaragem[playerid][8], 1, 1);

	TDGaragem[playerid][9] = CreatePlayerTextDraw(playerid, 232.083282, 308.740692, "RETIRAR");
	PlayerTextDrawLetterSize(playerid, TDGaragem[playerid][9], 0.173333, 0.879258);
	PlayerTextDrawTextSize(playerid, TDGaragem[playerid][9], 0.000000, 53.000000);
	PlayerTextDrawAlignment(playerid, TDGaragem[playerid][9], 2);
	PlayerTextDrawColor(playerid, TDGaragem[playerid][9], 589505535);
	PlayerTextDrawUseBox(playerid, TDGaragem[playerid][9], 1);
	PlayerTextDrawBoxColor(playerid, TDGaragem[playerid][9], 1678485503);
	PlayerTextDrawSetShadow(playerid, TDGaragem[playerid][9], 0);
	PlayerTextDrawSetOutline(playerid, TDGaragem[playerid][9], 0);
	PlayerTextDrawBackgroundColor(playerid, TDGaragem[playerid][9], 255);
	PlayerTextDrawFont(playerid, TDGaragem[playerid][9], 1);
	PlayerTextDrawSetProportional(playerid, TDGaragem[playerid][9], 1);
	PlayerTextDrawSetShadow(playerid, TDGaragem[playerid][9], 0);
	PlayerTextDrawSetSelectable(playerid, TDGaragem[playerid][9], true);

	TDGaragem[playerid][10] = CreatePlayerTextDraw(playerid, 363.226074, 166.279190, "ESTADO_DO_VEICULO");
	PlayerTextDrawLetterSize(playerid, TDGaragem[playerid][10], 0.173333, 0.879258);
	PlayerTextDrawAlignment(playerid, TDGaragem[playerid][10], 1);
	PlayerTextDrawColor(playerid, TDGaragem[playerid][10], -1061109505);
	PlayerTextDrawSetShadow(playerid, TDGaragem[playerid][10], 0);
	PlayerTextDrawSetOutline(playerid, TDGaragem[playerid][10], 0);
	PlayerTextDrawBackgroundColor(playerid, TDGaragem[playerid][10], 255);
	PlayerTextDrawFont(playerid, TDGaragem[playerid][10], 1);
	PlayerTextDrawSetProportional(playerid, TDGaragem[playerid][10], 1);
	PlayerTextDrawSetShadow(playerid, TDGaragem[playerid][10], 0);

	TDGaragem[playerid][11] = CreatePlayerTextDraw(playerid, 363.226074, 174.679702, "ESTACIONADO");
	PlayerTextDrawLetterSize(playerid, TDGaragem[playerid][11], 0.142499, 0.734073);
	PlayerTextDrawAlignment(playerid, TDGaragem[playerid][11], 1);
	PlayerTextDrawColor(playerid, TDGaragem[playerid][11], -2139062017);
	PlayerTextDrawSetShadow(playerid, TDGaragem[playerid][11], 0);
	PlayerTextDrawSetOutline(playerid, TDGaragem[playerid][11], 0);
	PlayerTextDrawBackgroundColor(playerid, TDGaragem[playerid][11], 255);
	PlayerTextDrawFont(playerid, TDGaragem[playerid][11], 1);
	PlayerTextDrawSetProportional(playerid, TDGaragem[playerid][11], 1);
	PlayerTextDrawSetShadow(playerid, TDGaragem[playerid][11], 0);

	TDGaragem[playerid][12] = CreatePlayerTextDraw(playerid, 375.833465, 191.864959, "box");
	PlayerTextDrawLetterSize(playerid, TDGaragem[playerid][12], 0.000000, -0.208326);
	PlayerTextDrawTextSize(playerid, TDGaragem[playerid][12], 436.000000, 0.000000);
	PlayerTextDrawAlignment(playerid, TDGaragem[playerid][12], 1);
	PlayerTextDrawColor(playerid, TDGaragem[playerid][12], -1);
	PlayerTextDrawUseBox(playerid, TDGaragem[playerid][12], 1);
	PlayerTextDrawBoxColor(playerid, TDGaragem[playerid][12], 589505535);
	PlayerTextDrawSetShadow(playerid, TDGaragem[playerid][12], 0);
	PlayerTextDrawSetOutline(playerid, TDGaragem[playerid][12], 0);
	PlayerTextDrawBackgroundColor(playerid, TDGaragem[playerid][12], 255);
	PlayerTextDrawFont(playerid, TDGaragem[playerid][12], 1);
	PlayerTextDrawSetProportional(playerid, TDGaragem[playerid][12], 1);
	PlayerTextDrawSetShadow(playerid, TDGaragem[playerid][12], 0);

	TDGaragem[playerid][13] = CreatePlayerTextDraw(playerid, 363.226074, 195.280960, "ESTADO_DA_LATARIA");
	PlayerTextDrawLetterSize(playerid, TDGaragem[playerid][13], 0.173333, 0.879258);
	PlayerTextDrawAlignment(playerid, TDGaragem[playerid][13], 1);
	PlayerTextDrawColor(playerid, TDGaragem[playerid][13], -1061109505);
	PlayerTextDrawSetShadow(playerid, TDGaragem[playerid][13], 0);
	PlayerTextDrawSetOutline(playerid, TDGaragem[playerid][13], 0);
	PlayerTextDrawBackgroundColor(playerid, TDGaragem[playerid][13], 255);
	PlayerTextDrawFont(playerid, TDGaragem[playerid][13], 1);
	PlayerTextDrawSetProportional(playerid, TDGaragem[playerid][13], 1);
	PlayerTextDrawSetShadow(playerid, TDGaragem[playerid][13], 0);

	TDGaragem[playerid][14] = CreatePlayerTextDraw(playerid, 363.226074, 203.381454, "100%");
	PlayerTextDrawLetterSize(playerid, TDGaragem[playerid][14], 0.142499, 0.734073);
	PlayerTextDrawAlignment(playerid, TDGaragem[playerid][14], 1);
	PlayerTextDrawColor(playerid, TDGaragem[playerid][14], -2139062017);
	PlayerTextDrawSetShadow(playerid, TDGaragem[playerid][14], 0);
	PlayerTextDrawSetOutline(playerid, TDGaragem[playerid][14], 0);
	PlayerTextDrawBackgroundColor(playerid, TDGaragem[playerid][14], 255);
	PlayerTextDrawFont(playerid, TDGaragem[playerid][14], 1);
	PlayerTextDrawSetProportional(playerid, TDGaragem[playerid][14], 1);
	PlayerTextDrawSetShadow(playerid, TDGaragem[playerid][14], 0);

	TDGaragem[playerid][15] = CreatePlayerTextDraw(playerid, 360.266876, 168.122146, "box");
	PlayerTextDrawLetterSize(playerid, TDGaragem[playerid][15], 0.000000, 1.350700);
	PlayerTextDrawTextSize(playerid, TDGaragem[playerid][15], 360.000000, 0.000000);
	PlayerTextDrawAlignment(playerid, TDGaragem[playerid][15], 1);
	PlayerTextDrawColor(playerid, TDGaragem[playerid][15], -1);
	PlayerTextDrawUseBox(playerid, TDGaragem[playerid][15], 1);
	PlayerTextDrawBoxColor(playerid, TDGaragem[playerid][15], 1678485503);
	PlayerTextDrawSetShadow(playerid, TDGaragem[playerid][15], 0);
	PlayerTextDrawSetOutline(playerid, TDGaragem[playerid][15], 0);
	PlayerTextDrawBackgroundColor(playerid, TDGaragem[playerid][15], 255);
	PlayerTextDrawFont(playerid, TDGaragem[playerid][15], 1);
	PlayerTextDrawSetProportional(playerid, TDGaragem[playerid][15], 1);
	PlayerTextDrawSetShadow(playerid, TDGaragem[playerid][15], 0);

	TDGaragem[playerid][16] = CreatePlayerTextDraw(playerid, 360.133605, 197.063400, "box");
	PlayerTextDrawLetterSize(playerid, TDGaragem[playerid][16], 0.000000, 1.434034);
	PlayerTextDrawTextSize(playerid, TDGaragem[playerid][16], 360.000000, 0.000000);
	PlayerTextDrawAlignment(playerid, TDGaragem[playerid][16], 1);
	PlayerTextDrawColor(playerid, TDGaragem[playerid][16], -1);
	PlayerTextDrawUseBox(playerid, TDGaragem[playerid][16], 1);
	PlayerTextDrawBoxColor(playerid, TDGaragem[playerid][16], 1678485503);
	PlayerTextDrawSetShadow(playerid, TDGaragem[playerid][16], 0);
	PlayerTextDrawSetOutline(playerid, TDGaragem[playerid][16], 0);
	PlayerTextDrawBackgroundColor(playerid, TDGaragem[playerid][16], 255);
	PlayerTextDrawFont(playerid, TDGaragem[playerid][16], 1);
	PlayerTextDrawSetProportional(playerid, TDGaragem[playerid][16], 1);
	PlayerTextDrawSetShadow(playerid, TDGaragem[playerid][16], 0);

	TDGaragem[playerid][17] = CreatePlayerTextDraw(playerid, 191.266616, 329.814697, "");
	PlayerTextDrawLetterSize(playerid, TDGaragem[playerid][17], 0.000000, 0.000000);
	PlayerTextDrawTextSize(playerid, TDGaragem[playerid][17], 49.000000, 49.000000);
	PlayerTextDrawAlignment(playerid, TDGaragem[playerid][17], 1);
	PlayerTextDrawColor(playerid, TDGaragem[playerid][17], -1);
	PlayerTextDrawSetShadow(playerid, TDGaragem[playerid][17], 0);
	PlayerTextDrawSetOutline(playerid, TDGaragem[playerid][17], 0);
	PlayerTextDrawBackgroundColor(playerid, TDGaragem[playerid][17], 589505535);
	PlayerTextDrawFont(playerid, TDGaragem[playerid][17], 5);
	PlayerTextDrawSetProportional(playerid, TDGaragem[playerid][17], 0);
	PlayerTextDrawSetShadow(playerid, TDGaragem[playerid][17], 0);
	PlayerTextDrawSetSelectable(playerid, TDGaragem[playerid][17], true);
	PlayerTextDrawSetPreviewModel(playerid, TDGaragem[playerid][17], 411);
	PlayerTextDrawSetPreviewRot(playerid, TDGaragem[playerid][17], 0.000000, 0.000000, 45.000000, 1.000000);
	PlayerTextDrawSetPreviewVehCol(playerid, TDGaragem[playerid][17], 1, 1);

	TDGaragem[playerid][18] = CreatePlayerTextDraw(playerid, 192.666870, 377.363311, "box");
	PlayerTextDrawLetterSize(playerid, TDGaragem[playerid][18], 0.000000, -0.065965);
	PlayerTextDrawTextSize(playerid, TDGaragem[playerid][18], 239.000000, 0.000000);
	PlayerTextDrawAlignment(playerid, TDGaragem[playerid][18], 1);
	PlayerTextDrawColor(playerid, TDGaragem[playerid][18], -1);
	PlayerTextDrawUseBox(playerid, TDGaragem[playerid][18], 1);
	PlayerTextDrawBoxColor(playerid, TDGaragem[playerid][18], 1678485503);
	PlayerTextDrawSetShadow(playerid, TDGaragem[playerid][18], 0);
	PlayerTextDrawSetOutline(playerid, TDGaragem[playerid][18], 0);
	PlayerTextDrawBackgroundColor(playerid, TDGaragem[playerid][18], 255);
	PlayerTextDrawFont(playerid, TDGaragem[playerid][18], 1);
	PlayerTextDrawSetProportional(playerid, TDGaragem[playerid][18], 1);
	PlayerTextDrawSetShadow(playerid, TDGaragem[playerid][18], 0);

	TDGaragem[playerid][19] = CreatePlayerTextDraw(playerid, 243.169784, 329.814697, "");
	PlayerTextDrawLetterSize(playerid, TDGaragem[playerid][19], 0.000000, 0.000000);
	PlayerTextDrawTextSize(playerid, TDGaragem[playerid][19], 49.000000, 49.000000);
	PlayerTextDrawAlignment(playerid, TDGaragem[playerid][19], 1);
	PlayerTextDrawColor(playerid, TDGaragem[playerid][19], -1);
	PlayerTextDrawSetShadow(playerid, TDGaragem[playerid][19], 0);
	PlayerTextDrawSetOutline(playerid, TDGaragem[playerid][19], 0);
	PlayerTextDrawBackgroundColor(playerid, TDGaragem[playerid][19], 589505535);
	PlayerTextDrawFont(playerid, TDGaragem[playerid][19], 5);
	PlayerTextDrawSetProportional(playerid, TDGaragem[playerid][19], 0);
	PlayerTextDrawSetShadow(playerid, TDGaragem[playerid][19], 0);
	PlayerTextDrawSetSelectable(playerid, TDGaragem[playerid][19], true);
	PlayerTextDrawSetPreviewModel(playerid, TDGaragem[playerid][19], 1410065407);
	PlayerTextDrawSetPreviewRot(playerid, TDGaragem[playerid][19], 0.000000, 0.000000, 45.000000, 1.000000);

	TDGaragem[playerid][20] = CreatePlayerTextDraw(playerid, 244.417541, 377.463317, "box");
	PlayerTextDrawLetterSize(playerid, TDGaragem[playerid][20], 0.000000, -0.065965);
	PlayerTextDrawTextSize(playerid, TDGaragem[playerid][20], 290.879882, 0.000000);
	PlayerTextDrawAlignment(playerid, TDGaragem[playerid][20], 1);
	PlayerTextDrawColor(playerid, TDGaragem[playerid][20], -1);
	PlayerTextDrawUseBox(playerid, TDGaragem[playerid][20], 1);
	PlayerTextDrawBoxColor(playerid, TDGaragem[playerid][20], 1678485503);
	PlayerTextDrawSetShadow(playerid, TDGaragem[playerid][20], 0);
	PlayerTextDrawSetOutline(playerid, TDGaragem[playerid][20], 0);
	PlayerTextDrawBackgroundColor(playerid, TDGaragem[playerid][20], 255);
	PlayerTextDrawFont(playerid, TDGaragem[playerid][20], 1);
	PlayerTextDrawSetProportional(playerid, TDGaragem[playerid][20], 1);
	PlayerTextDrawSetShadow(playerid, TDGaragem[playerid][20], 0);

	TDGaragem[playerid][21] = CreatePlayerTextDraw(playerid, 296.003814, 329.796203, "");
	PlayerTextDrawLetterSize(playerid, TDGaragem[playerid][21], 0.000000, 0.000000);
	PlayerTextDrawTextSize(playerid, TDGaragem[playerid][21], 49.000000, 49.000000);
	PlayerTextDrawAlignment(playerid, TDGaragem[playerid][21], 1);
	PlayerTextDrawColor(playerid, TDGaragem[playerid][21], -1);
	PlayerTextDrawSetShadow(playerid, TDGaragem[playerid][21], 0);
	PlayerTextDrawSetOutline(playerid, TDGaragem[playerid][21], 0);
	PlayerTextDrawBackgroundColor(playerid, TDGaragem[playerid][21], 589505535);
	PlayerTextDrawFont(playerid, TDGaragem[playerid][21], 5);
	PlayerTextDrawSetProportional(playerid, TDGaragem[playerid][21], 0);
	PlayerTextDrawSetShadow(playerid, TDGaragem[playerid][21], 0);
	PlayerTextDrawSetSelectable(playerid, TDGaragem[playerid][21], true);
	PlayerTextDrawSetPreviewModel(playerid, TDGaragem[playerid][21], 1410065407);
	PlayerTextDrawSetPreviewRot(playerid, TDGaragem[playerid][21], 0.000000, 0.000000, 45.000000, 1.000000);

	TDGaragem[playerid][22] = CreatePlayerTextDraw(playerid, 297.420776, 377.463317, "box");
	PlayerTextDrawLetterSize(playerid, TDGaragem[playerid][22], 0.000000, -0.065965);
	PlayerTextDrawTextSize(playerid, TDGaragem[playerid][22], 343.682922, 0.000000);
	PlayerTextDrawAlignment(playerid, TDGaragem[playerid][22], 1);
	PlayerTextDrawColor(playerid, TDGaragem[playerid][22], -1);
	PlayerTextDrawUseBox(playerid, TDGaragem[playerid][22], 1);
	PlayerTextDrawBoxColor(playerid, TDGaragem[playerid][22], 1678485503);
	PlayerTextDrawSetShadow(playerid, TDGaragem[playerid][22], 0);
	PlayerTextDrawSetOutline(playerid, TDGaragem[playerid][22], 0);
	PlayerTextDrawBackgroundColor(playerid, TDGaragem[playerid][22], 255);
	PlayerTextDrawFont(playerid, TDGaragem[playerid][22], 1);
	PlayerTextDrawSetProportional(playerid, TDGaragem[playerid][22], 1);
	PlayerTextDrawSetShadow(playerid, TDGaragem[playerid][22], 0);

	TDGaragem[playerid][23] = CreatePlayerTextDraw(playerid, 347.706970, 329.796203, "");
	PlayerTextDrawLetterSize(playerid, TDGaragem[playerid][23], 0.000000, 0.000000);
	PlayerTextDrawTextSize(playerid, TDGaragem[playerid][23], 49.000000, 49.000000);
	PlayerTextDrawAlignment(playerid, TDGaragem[playerid][23], 1);
	PlayerTextDrawColor(playerid, TDGaragem[playerid][23], -1);
	PlayerTextDrawSetShadow(playerid, TDGaragem[playerid][23], 0);
	PlayerTextDrawSetOutline(playerid, TDGaragem[playerid][23], 0);
	PlayerTextDrawBackgroundColor(playerid, TDGaragem[playerid][23], 589505535);
	PlayerTextDrawFont(playerid, TDGaragem[playerid][23], 5);
	PlayerTextDrawSetProportional(playerid, TDGaragem[playerid][23], 0);
	PlayerTextDrawSetShadow(playerid, TDGaragem[playerid][23], 0);
	PlayerTextDrawSetSelectable(playerid, TDGaragem[playerid][23], true);
	PlayerTextDrawSetPreviewModel(playerid, TDGaragem[playerid][23], 1410065407);
	PlayerTextDrawSetPreviewRot(playerid, TDGaragem[playerid][23], 0.000000, 0.000000, 45.000000, 1.000000);

	TDGaragem[playerid][24] = CreatePlayerTextDraw(playerid, 349.004364, 376.889312, "box");
	PlayerTextDrawLetterSize(playerid, TDGaragem[playerid][24], 0.000000, -0.065965);
	PlayerTextDrawTextSize(playerid, TDGaragem[playerid][24], 394.900054, 0.000000);
	PlayerTextDrawAlignment(playerid, TDGaragem[playerid][24], 1);
	PlayerTextDrawColor(playerid, TDGaragem[playerid][24], -1);
	PlayerTextDrawUseBox(playerid, TDGaragem[playerid][24], 1);
	PlayerTextDrawBoxColor(playerid, TDGaragem[playerid][24], 1678485503);
	PlayerTextDrawSetShadow(playerid, TDGaragem[playerid][24], 0);
	PlayerTextDrawSetOutline(playerid, TDGaragem[playerid][24], 0);
	PlayerTextDrawBackgroundColor(playerid, TDGaragem[playerid][24], 255);
	PlayerTextDrawFont(playerid, TDGaragem[playerid][24], 1);
	PlayerTextDrawSetProportional(playerid, TDGaragem[playerid][24], 1);
	PlayerTextDrawSetShadow(playerid, TDGaragem[playerid][24], 0);

	TDGaragem[playerid][25] = CreatePlayerTextDraw(playerid, 399.857940, 329.822235, "");
	PlayerTextDrawLetterSize(playerid, TDGaragem[playerid][25], 0.000000, 0.000000);
	PlayerTextDrawTextSize(playerid, TDGaragem[playerid][25], 49.000000, 49.000000);
	PlayerTextDrawAlignment(playerid, TDGaragem[playerid][25], 1);
	PlayerTextDrawColor(playerid, TDGaragem[playerid][25], -1);
	PlayerTextDrawSetShadow(playerid, TDGaragem[playerid][25], 0);
	PlayerTextDrawSetOutline(playerid, TDGaragem[playerid][25], 0);
	PlayerTextDrawBackgroundColor(playerid, TDGaragem[playerid][25], 589505535);
	PlayerTextDrawFont(playerid, TDGaragem[playerid][25], 5);
	PlayerTextDrawSetProportional(playerid, TDGaragem[playerid][25], 0);
	PlayerTextDrawSetShadow(playerid, TDGaragem[playerid][25], 0);
	PlayerTextDrawSetSelectable(playerid, TDGaragem[playerid][25], true);
	PlayerTextDrawSetPreviewModel(playerid, TDGaragem[playerid][25], 1410065407);
	PlayerTextDrawSetPreviewRot(playerid, TDGaragem[playerid][25], 0.000000, 0.000000, 45.000000, 1.000000);

	TDGaragem[playerid][26] = CreatePlayerTextDraw(playerid, 401.188232, 377.189331, "box");
	PlayerTextDrawLetterSize(playerid, TDGaragem[playerid][26], 0.000000, -0.065965);
	PlayerTextDrawTextSize(playerid, TDGaragem[playerid][26], 448.000183, 0.000000);
	PlayerTextDrawAlignment(playerid, TDGaragem[playerid][26], 1);
	PlayerTextDrawColor(playerid, TDGaragem[playerid][26], -1);
	PlayerTextDrawUseBox(playerid, TDGaragem[playerid][26], 1);
	PlayerTextDrawBoxColor(playerid, TDGaragem[playerid][26], 1678485503);
	PlayerTextDrawSetShadow(playerid, TDGaragem[playerid][26], 0);
	PlayerTextDrawSetOutline(playerid, TDGaragem[playerid][26], 0);
	PlayerTextDrawBackgroundColor(playerid, TDGaragem[playerid][26], 255);
	PlayerTextDrawFont(playerid, TDGaragem[playerid][26], 1);
	PlayerTextDrawSetProportional(playerid, TDGaragem[playerid][26], 1);
	PlayerTextDrawSetShadow(playerid, TDGaragem[playerid][26], 0);

	callback();
}

function ShowTDGaragem(playerid) {
	TDGaragem[playerid].forEach(function (element) {
		ShowPlayerTextDraw(playerid, element);
	});
}

module.exports = {
	LoadTDGaragem,
	ShowTDGaragem
};