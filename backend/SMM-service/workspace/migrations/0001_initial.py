# Generated by Django 4.2.11 on 2024-04-02 13:21

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('channel', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Workspace',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=32)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('channels', models.ManyToManyField(related_name='channels', to='channel.channel')),
                ('creator_user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='created_workspaces', to=settings.AUTH_USER_MODEL)),
                ('members', models.ManyToManyField(to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='WorkSpaceInviteLink',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('creator_user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='created_user', to=settings.AUTH_USER_MODEL)),
                ('workspace', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='workspace', to='workspace.workspace')),
            ],
        ),
    ]