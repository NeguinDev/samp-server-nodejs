const {
	logprint: print,
	SampEvents: on,
	SampFunctions
} = require("samp-node-lib");

on.OnGameModeInit(() => {
	print(
		'============================================\n\n' +
		'\tGameMode Inicializada!\n\n' +
		'============================================');

	SampFunctions.SetGameModeText("Neguin Dev");
});

on.OnPlayerConnect(player => {
	print(`Player ${player.playerid} conectou!`);
	player.SendClientMessage('#00FF00', 'Bem vindo ao servidor!');


	player.SetSpawnInfo(
		0, 1,
		0, 0, 3, 0,
		31, 9999, 0, 0, 0, 0, 0);
	player.SpawnPlayer();
});

on.OnPlayerSpawn(player => {
	player.TogglePlayerControllable(true);
	player.TogglePlayerSpectating(false);
});

on.OnPlayerCommandText((player, cmdtext) => {
	if (cmdtext === '/test') {
		player.SendClientMessage('#FF00FF', 'Teste de mensagem!');
	}

	return 1;
});