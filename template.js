/* 
 * cell grunt template
 * 一个简单的grunt脚手架模板
 * 基于seajs，所以使用了seajs官方提供的grunt第三方插件
 *
 * author tobeyouth
 * email:tobeyouth@gmail.com
 * date:2014.07.20
 *
*/

'use strict'

exports.description = 'Create your cell module!Find more fun.';

exports.notes = 'Project name should be same as your name at package.json.Don`t fogot define your module.';

exports.after = 'Enjoy it!';

exports.warnOn = '*';

exports.template = function (grunt,init,done) {
    init.process({},[
        // enter your module's name
        init.prompt('name'),
        init.prompt('version'),
        init.prompt('author_name','youtang'),
        init.prompt('licenses', 'MIT')
    ],function (err,props) {
        if (err) {
            console.wran(err);
            return;
        };

        props.json = props.name + '.json';
        props.keyword = ['cell'];

        var files = init.filesToCopy(props);
        init.addLicenseFiles(files, props.licenses);
    
        init.copyAndProcess(files, props);

        init.writePackageJSON('package.json', {
            name: props.name,
            version: props.version,
            author_name:props.auther_name,
            licenses:props.licenses,
            node_version: '>= 0.8.0',
            devDependencies: {
                'grunt-contrib-stylus':'~0.18.0',
                'grunt-contrib-jshint': '~0.10.0',
                'grunt-cmd-concat': '0.2.5',
                'grunt-cmd-transport': '0.2.9',
                'grunt-contrib-uglify': '~0.2.0',
                'grunt-contrib-watch': '~0.4.0',
                'grunt-contrib-copy': '~0.5.0'
            }
        });

        done();

    });
}


